# --- Etapa 1: Construcción (Builder) ---
FROM node:20-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

ARG PUBLIC_API_URL
ENV PUBLIC_API_URL=$PUBLIC_API_URL

ARG PUBLIC_GA_ID
ENV PUBLIC_GA_ID=$PUBLIC_GA_ID

RUN pnpm build

FROM nginx:alpine AS runtime

COPY --from=builder /app/dist /usr/share/nginx/html

RUN printf 'server { listen 80; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]