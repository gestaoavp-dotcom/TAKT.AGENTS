# Roteiro de modelagem dos agentes

O Claude conduz; o Jean aprova. Cada passo é pequeno: ler ou ver uma coisa e responder algumas perguntas. Cada resposta é registrada na ficha do agente e o passo é marcado como concluído aqui. Uma ficha só vira **versão 1.0 aprovada** quando todos os passos dela estiverem concluídos.

**Situação:** ⬜ a fazer · 🟨 em andamento · ✅ aprovado

## Formato de cada passo

1. **Ler ou ver:** um trecho curto, mandado no chat ou apontado na ficha.
2. **Responder:** sim, não ou ajustar, mais as perguntas abertas.
3. **Registrar:** o Claude grava a decisão na ficha, atualiza este roteiro e envia ao GitHub.

## Agente 01 — Precificação e Rentabilidade (`01-precificacao-rentabilidade.md`)

| Passo | Assunto | Itens da folha | Situação |
| --- | --- | --- | --- |
| A1 | A conta oficial: linhas e o que entra no custo | 3, 4, 6 | ✅ 6/11 |
| A2 | Custos e materiais de envio: de onde vêm, qual valor vale, Full | 5, 7, pergunta A, PP10 a PP12 | 🟨 |
| A3 | Limites de marketing e faixas abaixo de 15% | 8, 9, 10 | ⬜ |
| A4 | Fechamento do mês | 11, 12, 13, pergunta B | ⬜ |
| A5 | Preço: recomendação, Clássico × Premium e concorrência | 1, 2, 14 | ⬜ |
| A6 | Revisão final das habilidades PR01 a PR08 | ficha completa | ⬜ |

## Agentes seguintes

Cada um começa com o Claude escrevendo a ficha e segue em passos como os do agente 01.

| Ordem | Agente | Situação |
| --- | --- | --- |
| B | 02 — Dados e Integrações: conexões, relatórios, campos, frequência | ⬜ |
| C | 03 — Ads | ⬜ |
| D | 04 — Analista de Conta | ⬜ |
| E | 05 — Estoque e Devoluções | ⬜ |
| F | 06 — Coordenador (orquestrador) | ⬜ |
| G | 07 — Revisão e Qualidade | ⬜ |
| H | 08 — Criativos | ⬜ |
| I | 09 — Educação e Aprendizado | ⬜ |
| J | 10 — Atualização de Regras | ⬜ |
| Z | Consolidar a modelagem v2: uma versão única, com todas as fichas aprovadas | ⬜ |

## Trilha paralela (opcional, quando o Jean quiser)

| Item | Situação |
| --- | --- |
| Terminar a chave secreta do Supabase (Vercel e arquivo local) | ⬜ |
| Avaliar os planos pagos do Supabase e da Vercel | ⬜ |
| Criar a conta da API da Anthropic para os agentes | ⬜ |
| Cadastrar o aplicativo de desenvolvedor do Mercado Livre | ⬜ |
| Trocar a chave antiga do gestaoapp antes de 2027 | ⬜ |
