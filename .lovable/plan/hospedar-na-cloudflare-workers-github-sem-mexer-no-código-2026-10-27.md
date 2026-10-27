# Hospedar na Cloudflare Workers + GitHub (sem mexer no código)

## Resposta direta sobre o GitHub

- **Não dá para conectar ao repositório já existente `TRIBAL70/Alan-Alves-dev`.** A sincronização com GitHub do Lovable sempre cria um repositório **novo** e privado. Ela não aceita um repositório que já existe, mesmo vazio.
- **Eu não consigo conectar sozinho.** Precisa da sua autorização manual, sempre.
- Onde clicar: **Configurações do projeto → Git → Conectar GitHub** (ou o botão **+** ao lado do chat → Projeto → GitHub). Autorize a conta/organização **TRIBAL70**. O Lovable vai criar um repositório novo (o nome pode ser trocado depois no GitHub sem quebrar a sincronização).
- `TRIBAL70/Alan-Alves-devs` (app Android) não será tocado em nenhum caso.

## Duas opções para chegar ao `Alan-Alves-dev`

1. **Recomendado (sincronização contínua):** conectar pelo caminho acima, o que cria um repositório novo. Depois, se quiser o nome `Alan-Alves-dev`, apague ou renomeie o repositório vazio atual no GitHub e renomeie o novo para esse nome.
2. **Cópia única para o repositório existente:** baixar o código (Configurações → Git → **Download codebase**, só em planos pagos) e enviar ao `Alan-Alves-dev` pelo seu computador (`git init`, `git remote add`, `git push`). Assim não há sincronização com o Lovable.

Não vou alterar o código nem publicar nada no Lovable.

## Configuração de build para a Cloudflare Workers (confirmada no projeto)

- Framework: TanStack Start v1 com SSR, Vite 7 e Nitro.
- Quando o build roda fora do Lovable, o preset padrão é **`cloudflare-module`** (definido na configuração `@lovable.dev/vite-tanstack-config`). Não há `wrangler.toml`/`wrangler.json` no repositório.
- Comando de build: `npm install && npm run build` (o script roda `vite build`).
- A pasta de saída padrão do Nitro fora do Lovable é **`.output/`**:
  - Worker: `.output/server/index.mjs`
  - Arquivos estáticos: `.output/public/` (inclui `/assets/site.css`, `sky.css`, as imagens etc.)
  - A configuração gerada para o Wrangler deve ficar em `.output/server/wrangler.json`. **Isso ainda não foi confirmado:** dentro do Lovable o projeto usa outras pastas e força `deployConfig: true` e `nodeCompat: true`. Fora dele, isso depende do padrão do Nitro.
- Flag necessária: `nodejs_compat` (ou uma data de compatibilidade a partir de `2026-08-04`, quando ela já vem ligada).
- O site não usa banco de dados nem chaves secretas. O chat Sky carrega o GPT Maker pelo navegador, e o WhatsApp usa links `wa.me`. Por isso não há variáveis de ambiente para configurar na Cloudflare.

## Próximos passos (seus, fora do Lovable)

1. Conectar o GitHub (opção 1 ou 2).
2. Na Cloudflare: Workers & Pages → Create → Import repository → escolher o repositório. Build: `npm run build`. Deploy: `npx wrangler deploy --config .output/server/wrangler.json`, ou `npx wrangler deploy .output/server/index.mjs --assets .output/public --compatibility-flags nodejs_compat`.
3. Fazer o primeiro build e conferir se as pastas `.output` acima aparecem. Esse é o único ponto ainda não verificado.

## O que não foi verificado

- Não rodei um build fora do Lovable nem um deploy na Cloudflare, porque você pediu para não mexer no projeto. Os caminhos de saída vêm da configuração instalada, não de um build de teste.
