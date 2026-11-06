# Agente 01 — Precificação e Rentabilidade

Ficha de detalhamento, versão 0.1 de 4 de novembro de 2026, em revisão com o Jean. Baseada na seção 6 da modelagem (`docs/modelagem/modelagem-agentes-marketplace-v1.md`) e nas decisões registradas na revisão (`docs/modelagem/revisao-claude-v1.md`).

**Legenda:** **DECIDIDO** quando o Jean já confirmou; **PROPOSTO** quando é sugestão para revisar; **PENDENTE** quando falta uma resposta (lista na seção 12).

## 0. Folha de aprovação do Jean

Responder cada item com **sim**, **não** ou **ajustar**. O resto da ficha (passos, testes, conferências) é revisado pelo Claude e pelo agente de Revisão; o Jean não precisa ler para aprovar.

| # | Afirmação | Resposta |
| --- | --- | --- |
| 1 | Na primeira versão o agente só recomenda preço. Depois, só aplica com o seu sim. | |
| 2 | No Mercado Livre, Clássico e Premium são calculados como preços separados. | |
| 3 | A conta oficial da seção 4 está na ordem certa e não falta nenhuma linha. | **Ajustar (6/11):** entram os materiais de envio e o brinde. Antecipação de recebimento fica fora. O parcelamento sem juros não ganha linha própria. |
| 4 | A embalagem conta como custo da venda, por pedido. | **Sim (6/11):** por pedido. Em geral é saco, ou o produto já vem na própria caixa. Quando for caixa, a equipe informa. |
| 5 | O sistema usa o custo da planilha válido na data da venda. Se esse valor é o último custo ou a média, quem decide é você, ao preencher. | |
| 6 | Frete da compra e impostos de importação entram no custo do produto, quando conhecidos. | **Sim, já incluídos (6/11):** o custo informado já vem com eles. O sistema não soma de novo, mas destaca a composição quando ela for informada. |
| 7 | Produto vendido sem custo fica com preço e margem bloqueados, sem estimativa, até o custo chegar. | |
| 8 | O limite oficial de marketing é o investimento total ÷ a receita total do mês. O ROAS do painel serve só como referência. | |
| 9 | Faixas abaixo de 15%: atenção entre 12% e 13%, piso de 10%, e abaixo de 10% só com decisão específica sua. | |
| 10 | Uma exceção de margem vence no prazo e nunca se renova sozinha. | |
| 11 | O mês da venda usa a mesma data do fechamento de outubro. | |
| 12 | Mês validado não muda. Ajustes tardios entram no mês em que acontecem, marcados com o mês de origem. | |
| 13 | Na conferência com outubro, aceitar até 1% de diferença na receita, com toda diferença explicada. | |
| 14 | Na primeira versão, os preços da concorrência são informados por você. | |

Perguntas abertas, sem resposta sim/não:

- **A.** Como os custos chegam hoje? Se houver uma planilha de exemplo, informar onde está.
- **B.** Quem informa a alíquota do Simples de cada mês, e até que dia?

## 1. Missão

Garantir que cada cliente trabalhe com preços que entreguem a meta de margem, e mostrar todo mês se a meta foi entregue e por quê.

Na prática, o agente faz cinco coisas:

1. Forma o preço de produtos novos e revisa o preço dos existentes.
2. Calcula quanto cada produto aguenta investir em anúncios.
3. Simula promoções e planos de recuperação de margem.
4. Apura a margem real do mês.
5. Explica a diferença entre o planejado e o realizado.

## 2. O que ele não faz

- Não faz o fechamento contábil ou financeiro completo do cliente.
- Não inclui despesas fixas, mensalidades, antecipação de recebimento nem a remuneração da gestão.
- Não altera preço em nenhuma conta sem sua aprovação. Na primeira versão, nem com aprovação: só recomenda.
- Não inventa custo. Custo que falta bloqueia o cálculo que depende dele e vira um pedido.
- Não decide verba de Ads. Ele calcula o limite; quem planeja a verba é o agente de Ads.
- Não guarda dados pessoais de compradores.

## 3. Regras que ele segue

| Regra | Situação |
| --- | --- |
| A meta de margem é 15%, medida na média do cliente no mês. Cada produto também mira 15% no preço. | DECIDIDO (R01) |
| Produto abaixo de 15% só com estratégia justificada e registrada como exceção (PR08). | DECIDIDO (R01) |
| A margem é calculada depois dos custos da venda e do investimento em anúncios, antes das despesas fixas. | DECIDIDO |
| O frete cobrado do comprador não entra na receita; só a diferença de frete (subsídio ou prejuízo) afeta a margem. | DECIDIDO (R02) |
| A comissão de afiliados e criadores conta como investimento em anúncios, junto com o Ads. | DECIDIDO (R04) |
| A armazenagem do Full entra no resultado do mês em que for cobrada, sem estimativa no preço. | DECIDIDO (R03) |
| O envio de mercadoria ao Full é diluído por unidade enviada. O valor da viagem com veículo próprio é informado a cada envio. | DECIDIDO (R03) |
| Mensalidades (loja, ERP, ferramentas) ficam fora, como despesa fixa. | DECIDIDO (R03) |
| Antecipação de recebimento fica fora da margem. | DECIDIDO (A1) |
| O parcelamento sem juros não ganha linha própria. No Mercado Livre ele faz parte da tarifa do Premium; nos outros canais já vem incluído na tarifa. | DECIDIDO (A1) |
| Materiais de envio (etiqueta, fita, saco) entram como custo por pedido, com valor padrão por cliente. Outros materiais são informados quando houver. | DECIDIDO (A1) |
| O brinde entra quando houver, com o valor informado. | DECIDIDO (A1), a confirmar |
| O custo do produto informado já inclui frete da compra e impostos de importação. O sistema não soma de novo. | DECIDIDO (A1) |
| O imposto usa a alíquota efetiva do Simples, por cliente e por mês. Clientes de outros regimes ficam com a margem bloqueada até existir uma regra aprovada. | DECIDIDO (R05) |
| Abaixo de 10%, nunca aplicar automaticamente; vira uma decisão específica sua. | PROPOSTO (2.2) |

## 4. A conta oficial

Esta é a conta que o sistema faz sempre do mesmo jeito. É função programada, não IA.

| Linha | O que é |
| --- | --- |
| **Receita** | Valor do produto vendido, sem o frete cobrado do comprador e sem os descontos bancados pelo vendedor. Mais os subsídios que a plataforma paga ao vendedor. |
| − Custo do produto | Custo vigente na data da venda, mais o envio ao Full por unidade (só nas vendas que saíram do Full). |
| − Tarifas do canal | Comissão e tarifas por venda, conforme o tipo de anúncio e a faixa de preço. |
| − Imposto | Receita × alíquota efetiva do mês. |
| − Frete líquido | Frete pago pelo vendedor menos o frete pago pelo comprador. |
| − Outros custos da venda | Por pedido: embalagem (saco, ou caixa quando informada), materiais de envio (etiqueta e fita, cerca de R$ 0,05 a R$ 0,10; saco, cerca de R$ 0,20 a R$ 0,30) e brinde, quando houver. Valores padrão por cliente; outros materiais quando informados. |
| **= Contribuição antes do marketing** | |
| − Marketing | Ads mais a comissão de afiliados e criadores. |
| **= Contribuição depois do marketing** | |
| **Margem** | Contribuição depois do marketing ÷ Receita |

No mês, entram também as linhas que não pertencem a uma venda específica: armazenagem do Full, devoluções, perdas e ressarcimentos. A margem do mês é a soma das contribuições dividida pela soma das receitas, não a média das margens dos produtos.

**Exemplo** (valores inventados, sem tarifas reais). Uma venda de R$ 100 que saiu do Full, com frete grátis para o comprador:

| Linha | Valor |
| --- | --- |
| Receita | R$ 100,00 |
| − Custo do produto (R$ 40 + R$ 1 de envio ao Full) | R$ 41,00 |
| − Tarifas do canal | R$ 14,00 |
| − Imposto (6% no mês) | R$ 6,00 |
| − Frete pago pelo vendedor | R$ 9,00 |
| **= Contribuição antes do marketing** | **R$ 30,00** (30%) |
| − Ads | R$ 8,00 |
| − Comissão de afiliado | R$ 7,00 |
| **= Contribuição depois do marketing** | **R$ 15,00** |
| **Margem** | **15%** |

Neste produto, o marketing pode chegar a R$ 30 por venda sem dar prejuízo, e a R$ 15 sem sair da meta.

## 5. O que ele recebe

| Dado | De onde vem | Quem fornece | Se faltar |
| --- | --- | --- | --- |
| Custo de cada produto, com data de início | Planilha de custos | Jean (centraliza) | Bloqueia preço e margem daquele produto |
| Composição dos kits | Cadastro do cliente | Jean | Bloqueia o kit |
| Alíquota efetiva do mês | Cadastro do cliente | PENDENTE (PP05) | Bloqueia a margem do mês |
| Meta e exceções aprovadas | Cadastro do cliente | Jean | Usa 15% |
| Vendas, tarifas e fretes | Relatórios do canal | Agente de Dados | Bloqueia a apuração |
| Gasto de Ads e comissões de afiliados | Relatórios do canal | Agente de Dados | A margem depois do marketing fica bloqueada; a de antes do marketing sai |
| Envios ao Full (unidades e valor) | Relatório do envio + valor informado | Jean | Envio fica com custo pendente |
| Armazenagem cobrada | Relatório do canal | Agente de Dados | Mês fica preliminar |
| Classificação das devoluções | Triagem | Agente de Estoque | Devolução fica "pendente de triagem" |
| Preços da concorrência | Informado ou anexado | Jean (primeira versão) | Recomendação sai sem comparação, com aviso |

## 6. Habilidades

### PR01 — Validar custos e vigências

- **Objetivo:** garantir que toda venda e todo cálculo de preço usem um custo conhecido e válido para a data.
- **Quando roda:** sempre que chega uma planilha de custos nova, sempre que um produto vendido não tem custo, e antes de qualquer outra habilidade.
- **Quem executa:** sistema.
- **Recebe:** planilha de custos, cadastro de produtos e lista de produtos vendidos no período.
- **Passos:**
  1. Ler a planilha e conferir se cada linha tem produto, valor e data de início.
  2. Ligar cada produto da planilha ao produto vendido nos canais, sinalizando os que não casam.
  3. Para cada venda, achar o custo vigente na data da venda.
  4. Somar o envio ao Full por unidade nas vendas que saíram do Full.
  5. Quando a planilha trouxer a composição do custo (valor do fornecedor, frete da compra, impostos de importação), guardar as partes e destacar quando uma delas mudar. O custo usado continua sendo o total informado.
  6. Listar o que faltou: produto vendido sem custo, custo sem data, custo zerado sem confirmação.
- **Entrega:** custo vigente por produto e por data, mais uma lista de pendências com quem deve resolver.
- **Para quando:** custo zerado sem confirmação, custo com data no futuro usado numa venda passada, ou produto que não casa. Não usa custo antigo para um produto novo.
- **Está certo quando:** todo produto vendido no período tem custo rastreável ou aparece na lista de pendências.
- **Aprovação:** qualquer mudança de custo cadastrado passa por você (18.3).
- **Pendências:** formato da planilha (PP01), o que o custo representa (PP02) e o que ele inclui (PP03).

### PR02 — Calcular preço por canal

- **Objetivo:** recomendar o preço de cada anúncio que entregue a meta, mostrando os limites.
- **Quando roda:** produto novo, mudança de custo ou de tarifa, pedido seu, ou margem do produto abaixo da meta.
- **Quem executa:** o sistema faz as contas; a IA compara com a concorrência e escreve a recomendação.
- **Recebe:** custo vigente (PR01), tarifas do canal por tipo de anúncio, regra de frete, alíquota, meta e exceções, e preços da concorrência quando houver.
- **Passos:**
  1. Identificar cliente, canal, anúncio e tipo de anúncio. No Mercado Livre, Clássico e Premium têm tarifas diferentes e são calculados separados.
  2. Calcular três preços:
     - **equilíbrio:** contribuição zero antes do marketing;
     - **piso da meta:** 15% sem investimento em anúncios;
     - **preço alvo:** 15% com o investimento planejado.
  3. Recalcular nos pontos em que o custo muda de faixa, como tarifa fixa abaixo de certo valor ou frete grátis obrigatório acima de certo valor. Perto desses limites a fórmula simples falha, então o sistema testa os preços dos dois lados.
  4. Comparar com a concorrência observada, apontando diferenças de produto, quantidade e frete. Não presumir a margem do concorrente.
  5. Escrever a recomendação com a memória de cálculo.
- **Entrega:** para cada anúncio, a tabela abaixo, mais o prazo de validade da recomendação.

  | Preço | Margem esperada | Limite de marketing por venda | Observação |
  | --- | --- | --- | --- |
  | Atual | | | |
  | Equilíbrio | 0% | | |
  | Piso da meta | 15% | R$ 0 | |
  | Alvo | 15% | o planejado | |
  | Concorrência | | | |

- **Para quando:** custo pendente (PR01), alíquota ausente, tarifa do canal desatualizada, ou conta que não fecha (por exemplo, quando nenhum preço consegue entregar a meta).
- **Está certo quando:** refazendo a conta à mão com a memória de cálculo, o resultado é o mesmo, e o preço recomendado, aplicado na conta oficial (seção 4), dá a margem prometida.
- **Aprovação:** todo preço passa por você.
- **Pendência:** ferramentas de concorrência (PP07).

### PR03 — Custear kits e variações

- **Objetivo:** dar a cada kit um custo correto, sem esquecer nem repetir componentes.
- **Quando roda:** kit novo, mudança de composição ou mudança de custo de um componente.
- **Quem executa:** sistema.
- **Passos:**
  1. Ler a composição: componentes, quantidades e variação.
  2. Somar o custo vigente de cada componente vezes a quantidade.
  3. Somar os custos próprios do kit (montagem, embalagem) só se não estiverem já dentro do custo dos componentes.
  4. Quando a composição ou o custo de um componente muda, invalidar as recomendações de preço daquele kit que ainda não foram aplicadas.
- **Entrega:** custo do kit com a composição usada e a data.
- **Está certo quando:** o custo do kit é igual à soma conferida dos componentes. Para margem e ABC, o kit é um item próprio; para estoque, cada venda de kit consome seus componentes (R09).

### PR04 — Calcular limite de investimento em anúncios

- **Objetivo:** dizer ao agente de Ads quanto cada produto, e o cliente no todo, aguenta investir.
- **Quando roda:** todo mês antes do planejamento de Ads, e quando preço, custo ou tarifa mudam.
- **Quem executa:** sistema.
- **Passos:**
  1. Para cada produto, pegar a contribuição antes do marketing.
  2. Calcular dois limites: o de **equilíbrio** (toda a contribuição antes do marketing) e o da **meta** (contribuição antes do marketing menos 15% da receita).
  3. Mostrar cada limite em reais por venda e em porcentagem da receita.
  4. Somar no cliente: o limite oficial é **investimento total em marketing ÷ receita total do cliente no mês**.
- **Entrega:** tabela de limites por produto e do cliente. O ROAS equivalente aparece só como referência, com o aviso de que depende de quantas vendas vêm sem anúncio (R17).
- **Está certo quando:** aplicando o limite da meta na conta oficial, a margem dá exatamente 15%.
- **Aprovação:** nenhuma. É um cálculo; quem pede verba é o agente de Ads.

### PR05 — Simular promoções e recuperação de margem

- **Objetivo:** mostrar, antes de uma promoção ou liquidação, quanto ela custa em margem e como recuperar.
- **Quando roda:** sob demanda (sua ou do agente de Conta, Ads ou Coordenador) e antes de toda exceção (PR08).
- **Quem executa:** o sistema calcula; a IA avalia se a recuperação é realista, olhando o histórico de vendas e o estoque.
- **Passos:**
  1. Receber produto, desconto, quem paga o desconto (vendedor ou plataforma), prazo, quantidade e verba.
  2. Calcular a margem por venda durante a promoção.
  3. Calcular quanto de venda a mais é preciso para manter a mesma contribuição total em reais.
  4. Se a margem ficar abaixo da meta, calcular a recuperação. Exemplo: se a promoção entrega 10% sobre R$ 1.000, o período seguinte precisa entregar 20% sobre R$ 1.000 para o ciclo fechar em 15%.
  5. Avaliar se o volume, o estoque e a demanda tornam a recuperação plausível. Não prometer recuperação só com aumento futuro de preço.
- **Entrega:** comparação "sem promoção × com promoção", contribuição em reais e em %, volume necessário, plano de recuperação e o que pode dar errado.
- **Está certo quando:** a soma das etapas (promoção mais recuperação) dá a margem do ciclo informada.
- **Aprovação:** a simulação não precisa; a promoção que sair dela vira uma exceção (PR08) e passa por você.

### PR06 — Apurar a margem do mês

- **Objetivo:** entregar o resultado real do mês por cliente, canal e produto.
- **Quando roda:** todo mês, depois que os relatórios do mês fechado chegam.
- **Quem executa:** sistema.
- **Passos:**
  1. Fixar o período e a data de corte. A data que define o "mês da venda" está PENDENTE (PP04).
  2. Juntar vendas, descontos, tarifas, fretes e impostos, guardando a origem de cada número.
  3. Tratar cancelamentos e devoluções sem contar duas vezes. O custo da devolução depende da triagem (R07):
     - item apto volta ao estoque e o custo dele sai;
     - item não apto vira perda;
     - item sem triagem fica pendente.
  4. Somar o marketing do mês: Ads pelo mês do gasto, mais as comissões de afiliados.
  5. Somar as linhas do mês que não são de uma venda: armazenagem cobrada no mês, perdas, ressarcimentos e ajustes de meses anteriores.
  6. Conferir os totais com os relatórios do canal e explicar qualquer diferença.
  7. Marcar como **preliminar** enquanto houver pendência e enviar para você validar.
  8. Depois de validado, o mês não muda. Ajustes tardios entram no mês em que acontecem, marcados como "ajuste de [mês de origem]" (proposta da R06, PENDENTE).
- **Entrega:** resultado do mês com receita, cada linha de custo, marketing, contribuição e margem, por cliente, canal e produto. Junto vão a lista do que ficou fora e a lista de pendências.
- **Para quando:** se houver custo pendente em produtos que somam mais do que uma parte relevante do faturamento, o resultado não pode ser marcado como validado. O limite exato está PENDENTE (PP08).
- **Está certo quando:** os totais batem com os relatórios dos canais, não há venda nem gasto duplicado e a soma por produto é igual ao total do cliente.
- **Aprovação:** você valida o resultado do mês.

### PR07 — Explicar desvio de margem

- **Objetivo:** dizer por que a margem do mês ficou diferente da planejada ou da do mês anterior.
- **Quando roda:** junto com a PR06, e quando a margem parcial do mês sair da faixa.
- **Quem executa:** o sistema separa os números; a IA escreve a explicação.
- **Passos:**
  1. O sistema decompõe a diferença em partes: efeito do preço, do custo, do mix de produtos, do marketing, do frete e das devoluções e perdas.
  2. A IA explica as maiores partes, com os produtos que mais pesaram em cada uma.
  3. Propor a ação de correção ligada a cada causa, com o agente responsável.
- **Entrega:** a "ponte" da margem (de 15% planejado para X% realizado, parte por parte), um texto curto e as ações sugeridas.
- **Está certo quando:** as partes somam exatamente a diferença total, e o texto não afirma causa que os números não mostram.
- **Aprovação:** nenhuma para a explicação; as ações sugeridas seguem as aprovações de cada área.

### PR08 — Registrar exceção de margem

- **Objetivo:** permitir trabalhar abaixo de 15% de forma justificada, com começo, meio e fim.
- **Quando roda:** sempre que um preço, promoção ou estratégia deixar um produto abaixo da meta.
- **Quem executa:** o sistema registra e controla; você aprova.
- **Recebe:** produto(s), motivo (liquidação, lançamento, campanha ou giro de estoque), margem esperada, prazo, limite de unidades ou de verba, plano de saída e simulação (PR05).
- **Passos:**
  1. Conferir se todos os campos estão preenchidos.
  2. Mostrar o efeito na margem do cliente no mês.
  3. Enviar para aprovação. Abaixo de 10%, destacar como decisão específica.
  4. Durante a exceção, acompanhar o consumo do limite e do prazo.
  5. No fim do prazo, ou se o limite estourar, encerrar e avisar. A exceção nunca se renova sozinha.
- **Entrega:** exceção registrada com aprovador, data e versão, e um resumo no relatório do mês.
- **Está certo quando:** nenhum produto aparece abaixo da meta no mês sem uma exceção aprovada ou um alerta.
- **Aprovação:** você ou uma pessoa autorizada da equipe (alçada PENDENTE, P06).

## 7. Rotinas

| Quando | O que faz |
| --- | --- |
| Todo dia | Verifica produtos vendidos sem custo (PR01) e exceções que vencem nos próximos dias (PR08). |
| Toda semana | Calcula a margem parcial do mês (preliminar) para o relatório semanal e avisa os produtos que saíram da meta sem exceção. |
| Todo mês | Apura o mês (PR06), explica o desvio (PR07), atualiza os limites de marketing (PR04) e revisa as exceções ativas. |
| Sob demanda | Preço de produto novo ou revisão (PR02), kit (PR03), simulação de promoção (PR05), exceção (PR08). |

## 8. Com quem ele troca informação

| Recebe de | O quê |
| --- | --- |
| Dados | Vendas, tarifas, fretes, Ads, afiliados e armazenagem, conferidos |
| Estoque | Classificação das devoluções e envios ao Full |
| Jean | Custos, alíquotas, meta, exceções aprovadas e concorrência |

| Entrega para | O quê |
| --- | --- |
| Ads | Limites de investimento por produto e do cliente (PR04) |
| Conta | Contribuição por produto para a ABC e a margem por canal |
| Coordenador | Recomendações de preço e exceções para aprovação |
| Revisão | Memória de cálculo de cada preço e do resultado do mês |
| Jean | Relatório mensal para validação |

## 9. Aprovações

| Ação | Quem aprova |
| --- | --- |
| Preço novo ou alterado | Jean |
| Exceção de margem | Jean ou pessoa autorizada (alçada PENDENTE) |
| Exceção abaixo de 10% | Jean, como decisão específica |
| Mudança de custo cadastrado | Jean |
| Resultado do mês | Jean |

## 10. Como medir se o agente está indo bem

- Parte do faturamento com custo conhecido (meta: perto de 100%).
- Diferença entre os totais do sistema e os relatórios dos canais.
- Recomendações de preço que você precisou corrigir.
- Desvios de margem explicados com as partes fechando.
- Produtos abaixo da meta sem exceção.

## 11. Casos de teste

| Caso | Resultado esperado |
| --- | --- |
| Produto simples com todos os custos | Reproduz a conta do exemplo da seção 4 |
| Venda com frete pago pelo comprador | O frete não entra na receita; só a diferença afeta a margem |
| Venda que saiu do Full | Soma o envio ao Full por unidade; venda de estoque próprio não soma |
| Venda com afiliado | A comissão entra no marketing, não nas tarifas |
| Kit com variação | Custo igual à soma dos componentes certos |
| Produto vendido sem custo | Bloqueia preço e margem do produto e pede o custo |
| Preço perto do limite de frete grátis | Calcula os dois lados do limite e recomenda o melhor |
| Promoção a 10% com recuperação | Calcula 20% na etapa seguinte e avalia se é realista |
| Exceção vencida | Encerra e avisa, sem renovar |
| Devolução sem triagem | Fica pendente, sem fechar o custo |
| Armazenagem cobrada no mês | Entra no mês, ligada ao produto quando o relatório permitir |
| Cliente fora do Simples | Margem bloqueada até existir regra |
| Fechamento de outubro | Bate com a referência dentro da tolerância, com as diferenças explicadas |

## 12. Pendências desta ficha

| Código | Pergunta | Sugestão do Claude |
| --- | --- | --- |
| PP01 | Como os custos chegam hoje (planilha, colunas)? | Uma planilha por cliente com produto, custo e data de início |
| PP02 | Quando o produto é recomprado por outro preço, qual custo vale? | O sistema usa o valor da planilha válido na data da venda; você decide se esse valor é o último custo ou a média |
| PP03 | ~~O custo do produto inclui frete da compra, impostos de importação e embalagem?~~ | **Resolvido (A1):** o custo já vem com frete e impostos; a embalagem vai em linha própria, por pedido |
| PP04 | Qual data define o mês da venda, e como ajustar mês já validado? | A mesma data usada no fechamento de outubro; ajustes tardios no mês em que acontecem |
| PP05 | Quem informa a alíquota do Simples de cada mês? | Você ou o contador do cliente, até o dia X do mês seguinte |
| PP06 | A faixa abaixo de 15% está certa (atenção em 12% a 13%, piso de 10%, abaixo disso decisão específica)? | Confirmar |
| PP07 | Quais ferramentas de pesquisa de concorrência você usa? | Na primeira versão, você informa ou anexa |
| PP08 | Quanto de diferença é aceitável ao conferir com outubro? | Até 1% da receita, com toda diferença explicada |
| PP09 | ~~A embalagem é custo por pedido ou por unidade?~~ | **Resolvido (A1):** por pedido |
| PP10 | Valor padrão dos materiais de envio por pedido | R$ 0,10 (etiqueta e fita) + R$ 0,25 (saco) = R$ 0,35 por pedido, ajustável por cliente |
| PP11 | Venda que sai do Full: quem embala é a plataforma, mas a etiqueta e o saco de cada unidade são colocados antes do envio ao Full | Contar etiqueta e saco por unidade, junto com o envio ao Full, e não por pedido |
| PP12 | Pedido com produtos de embalagens diferentes | Usar a embalagem de maior custo entre os produtos do pedido |
