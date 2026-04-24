# syntax=docker/dockerfile:1.7

# ============================================================
#  Casa Tua Prime — Dockerfile multi-stage (site estático)
#  Build com Bun + Vite, runtime Nginx alpine servindo /dist
# ============================================================

# -------- 1) Build --------
FROM oven/bun:1.1-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production

# Instala dependências usando cache de camadas
COPY package.json bun.lockb* package-lock.json* ./
RUN bun install --frozen-lockfile || bun install

# Copia o restante do código e gera o build estático em /app/dist
COPY . .
RUN bun run build

# -------- 2) Runtime (Nginx) --------
FROM nginx:1.27-alpine AS runner

# Configuração com fallback SPA (todas as rotas servem index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o site estático gerado pelo Vite
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
