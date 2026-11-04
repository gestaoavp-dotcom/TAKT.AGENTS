# Revisão da modelagem dos agentes de marketplace — v1

Revisão feita pelo Claude em 4 de novembro de 2026 sobre `modelagem-agentes-marketplace-v1.md`, seguindo o pedido da seção 22.2. Nada foi programado e nenhuma conta foi alterada.

**Como ler:** cada achado tem um código (R01, R02…), a seção onde está, a gravidade, o problema, o impacto, a correção sugerida e a decisão que depende do Jean. Gravidade segue a seção 14.2:

- **Impeditivo**: precisa estar decidido antes de construir o cálculo de margem.
- **Material**: muda resultado ou controle; decidir antes de usar em cliente.
- **Observação**: melhoria ou confirmação, sem urgência.

## Resumo

O documento está bem construído. As contas conferem (R17), as regras de bloqueio por dado ausente são boas e a separação entre CONFIRMADO, PROPOSTO e PENDENTE é clara. Os principais riscos não estão nos cálculos, e sim em **definições que mudam o valor da margem sem ninguém perceber**: o que entra na receita, o que é custo de venda e o que é despesa fixa, como contar impostos e devoluções.

| Código | Seção | Gravidade | Assunto |
| --- | --- | --- | --- |
| R01 | 2.2, 6.1 | Impeditivo | A meta de 15% vale por produto ou na média do cliente? |
| R02 | 6.3, P04 | Impeditivo | O frete cobrado do comprador entra na receita? |
| R03 | 2.2, 6.3 | Impeditivo | Armazenagem, fulfillment e mensalidades: custo da venda ou despesa fixa? |
| R04 | 6.2, 7 | Impeditivo | Comissão de afiliados e criadores: é Ads ou tarifa? |
| R05 | 2.3, 6.2 | Impeditivo | Um único percentual de imposto pode errar a margem |
| R06 | 6.8 | Impeditivo | Qual data define o "mês da venda" e como ajustar mês fechado |
| R07 | 6.9, 11.2 | Material | Custo da mercadoria em devoluções depende da triagem |
| R08 | 8.3 | Material | ABC com produtos de contribuição negativa passa de 100% |
| R09 | 6.6, 8.3, 11.1 | Material | Venda de kit conta para o kit, para os componentes ou para os dois? |
| R10 | 17.1, 18.1 | Material | Gasto extremo de Ads não tem resposta rápida |
| R11 | 5, 8 | Material | Coordenador e Analista de Conta fazem parte do mesmo trabalho |
| R12 | 3.1, 12, 14 | Material | Dados, Revisão e parte do Coordenador não precisam ser IA |
| R13 | 6.4, 12 | Material | Pesquisa de concorrência não tem dono nem fonte |
| R14 | 12.1, P15 | Material | O documento diz que o sistema não foi escolhido, mas já existe |
| R15 | 4.5, 12 | Material | Dados pessoais dos compradores não são tratados |
| R16 | 13, 10 | Observação | Atualização de Regras e Educação podem vir depois |
| R17 | 6.4, 6.5, 6.7 | Observação | Contas conferidas e um alerta sobre ROAS |
| R18 | 20.2 | Observação | Casos de teste que faltam |

## Registro de decisões do Jean

### 4 de novembro de 2026

**R01 — DECIDIDO.** A meta de 15% vale para a margem consolidada do cliente no mês. Cada produto também deve mirar 15% no preço. Trabalhar abaixo disso com um produto é permitido com estratégia justificada e registrada como exceção (2.2, 6.7).

**R02 — DECIDIDO.** O frete cobrado do comprador não entra na receita. Ele é abatido do custo de logística, e só a diferença (subsídio ou prejuízo de frete) afeta a margem. Cuidado de implementação: alguns relatórios dos canais trazem o frete dentro do "valor total" do pedido, então a importação precisa separar.

**R03 — DECIDIDO.**
- **Armazenagem do Full:** entra no resultado do mês em que for cobrada. Vai para o SKU quando o relatório do canal trouxer a cobrança por produto; caso contrário, fica como "armazenagem não atribuída" do canal, como já acontece com o Ads sem atribuição (6.9).
- **Envio de mercadoria ao Full:** coleta ou veículo próprio. O custo do envio é diluído no custo das unidades daquele envio.
- **Mensalidades:** continuam fora da margem como despesa fixa. Exemplos: plano profissional da Amazon, ERP (UpSeller, Bling) e ferramentas.
- **Veículo próprio:** o valor da viagem é informado a cada envio, porque depende do motorista e costuma ser acertado na hora. Sem valor informado, o envio fica com custo pendente; o sistema não deixa zerado sem aviso.
- **Diluição do envio:** por unidade. Separar por tamanho do produto não é atribuição da gestão.
- **Armazenagem:** entra só no resultado do mês em que for cobrada, sem estimativa no preço. Ela é acompanhada pelas métricas de desempenho dos envios e não aparece de surpresa.
- **Mensalidades:** confirmado que ficam fora como despesa fixa.

**R04 — DECIDIDO.** A comissão de afiliados e criadores é investimento em anúncios. Ela entra junto com o Ads no limite de investimento, mostrada como linha separada.

**R05 — DECIDIDO.** A maioria dos clientes é do Simples Nacional, então a primeira versão usa uma alíquota efetiva por cliente. Clientes de outros regimes ficam com a margem bloqueada até existir regra aprovada.
- **Atenção:** no Simples, a alíquota efetiva muda ao longo do ano, conforme o faturamento dos últimos 12 meses. O cadastro precisa guardar a alíquota por mês.
- **Pendente:** quem informa a alíquota de cada mês.

**R06 — EM ESCLARECIMENTO.** A pergunta foi reformulada com exemplos para o Jean.

**R11 — DECIDIDO.** A Conta cuida do que fazer e por quê. O Coordenador é um **orquestrador**: cuida de quem faz, quando e em que pé está.

Proposta de ferramenta para o orquestrador, a confirmar:
- **Controle no aplicativo TAKT Agents.** Fila de tarefas, aprovações, prazos, agenda diária, semanal e mensal, e histórico ficam no aplicativo e no banco, como regra fixa. Uma aprovação pode esperar dias e precisa ficar registrada (4.3) e ser invalidada se o custo mudar (4.4). Isso não deve depender da memória de uma IA.
- **IA chamada pelo aplicativo** (Claude, via API) nos passos que pedem interpretação: diagnóstico, cenários de preço e Ads, textos. A resposta volta em formato fixo e é gravada.
- **Depois, avaliar Claude Managed Agents.** É um serviço da Anthropic que roda os agentes, com agendamento, equipe de agentes e ponto de aprovação humana antes de cada ação. Faz sentido quando os agentes passarem a executar ações nas contas ou rodar tarefas longas sozinhos.

**R12 — EM ESCLARECIMENTO.** A explicação foi reformulada para o Jean.

**R15 — DECIDIDO.** Os dados pessoais dos compradores não são guardados. Importar só os campos usados nos cálculos.

## Achados impeditivos

### R01 — A meta de 15% vale por produto ou na média do cliente?

**Seções:** 2.2, 6.1, 6.4, 6.7.

**Problema:** o documento diz que a margem é "planejada na precificação e acompanhada no resultado mensal", mas não diz em que nível a meta é cobrada. Se cada produto precisa de 15%, qualquer produto abaixo vira exceção, inclusive os que você usa para atrair tráfego. Se a meta é a média do cliente no mês, um produto a 10% pode ser compensado por outro a 20%.

**Impacto:** muda quantas exceções o sistema vai gerar e se uma estratégia de mix é permitida sem aprovação.

**Correção sugerida:** no preço, cada produto mira a meta do projeto. O resultado oficial é a margem consolidada do cliente no mês (soma das contribuições ÷ soma das receitas, como já diz a 6.3). Produto planejado abaixo da meta vira exceção registrada, com motivo e prazo.

**Decisão do Jean:** confirmar se o resultado oficial é o consolidado do cliente no mês, por canal ou os dois.

### R02 — O frete cobrado do comprador entra na receita?

**Seções:** 6.3, P04.

**Problema:** a margem é uma divisão: contribuição ÷ receita. Se o frete pago pelo comprador entra na receita, a mesma venda mostra uma margem menor.

**Exemplo:** no caso da 6.5 (receita R$ 100, contribuição R$ 15), suponha que R$ 10 dos R$ 100 sejam frete cobrado do comprador e repassado à transportadora.

- Com o frete dentro da receita: R$ 15 ÷ R$ 100 = **15%**.
- Com o frete fora da receita e abatido do custo de logística: R$ 15 ÷ R$ 90 = **16,7%**.

O dinheiro que sobra é o mesmo, mas a margem muda 1,7 ponto só pela regra de conta. A meta de 15% só tem significado depois que essa regra estiver fixada.

**Correção sugerida:** a receita é o valor do produto. O frete cobrado do comprador é abatido do custo de logística, e só a diferença (subsídio ou prejuízo de frete) afeta a margem. Aplicar a mesma regra em todos os canais.

**Decisão do Jean:** aprovar essa base ou definir outra, antes de calcular a primeira margem.

### R03 — Armazenagem, fulfillment e mensalidades: custo da venda ou despesa fixa?

**Seções:** 2.2, 6.3.

**Problema:** a meta é "antes das despesas fixas", mas o documento não diz o que é fixo. Algumas cobranças dos canais não estão ligadas a uma venda específica: armazenagem no Full e no fulfillment, taxa de estoque parado, mensalidade de plano de loja, anúncios destacados cobrados por período.

**Impacto:** se a armazenagem ficar fora, um produto parado no Full pode parecer ter 15% e na verdade dar prejuízo. Se a mensalidade da loja entrar, a margem fica distorcida nos meses de pouca venda.

**Correção sugerida:** manter por canal uma lista "entra na margem / fica fora". Proposta inicial:

- **Entra:** armazenagem e taxas de fulfillment, porque variam com o estoque e o volume de cada produto.
- **Fica fora:** mensalidades de loja e de ferramentas.

Sempre mostrar no relatório o que ficou fora, como a 6.2 já pede para custos excluídos.

**Decisão do Jean:** aprovar a lista inicial por canal.

### R04 — Comissão de afiliados e criadores: é Ads ou tarifa?

**Seções:** 6.2, 7.1, 7.4.

**Problema:** TikTok Shop (afiliados e criadores) e Shopee (afiliados) cobram comissão por venda que funciona como investimento de marketing. O documento não diz onde ela entra.

**Impacto:** se entrar como tarifa, o limite de Ads calculado pela Rentabilidade ignora esse gasto e o Ads pode investir além do que a margem aguenta. Se não entrar em lugar nenhum, a margem fica maior do que a real. No TikTok Shop isso pode ser o maior custo de marketing.

**Correção sugerida:** criar a linha "marketing" = Ads + comissão de afiliados e criadores, com as duas partes mostradas separadas. O limite de investimento da Rentabilidade vale para a soma.

**Decisão do Jean:** confirmar se o limite de Ads deve incluir afiliados.

### R05 — Um único percentual de imposto pode errar a margem

**Seções:** 2.3 ("impostos serão informados no cadastro do cliente"), 6.2.

**Problema:** um percentual único funciona bem para cliente do Simples Nacional, que paga uma alíquota sobre o faturamento. Para Lucro Presumido ou Real, o imposto muda conforme o estado de destino, o produto e os créditos. Venda de marketplace vai para o país inteiro.

**Impacto:** o erro pode ser de vários pontos de margem, maior do que a diferença entre 15% e 12%.

**Correção sugerida:** na primeira versão, aceitar só clientes em que um percentual efetivo por cliente seja uma boa aproximação. Escrever no relatório "imposto estimado pela alíquota efetiva X%, informada por [pessoa]". Para os outros regimes, bloquear a margem até existir uma regra aprovada com o contador do cliente.

**Decisão do Jean:** confirmar o regime tributário das contas do piloto e quem informa a alíquota.

### R06 — Qual data define o "mês da venda" e como ajustar mês fechado

**Seções:** 6.8, P04, P10.

**Problema:** cada canal mostra várias datas para o mesmo pedido: criação, pagamento aprovado, envio e entrega. Um pedido criado em 31/10 e pago em 01/11 pode cair em meses diferentes conforme o relatório. Também não está definido o que acontece com pedido cancelado antes do envio.

Além disso, a 6.8 propõe vincular devoluções tardias ao pedido original. Isso reabre um mês que você já validou.

**Correção sugerida:**

1. "Mês da venda" = mês do pagamento aprovado.
2. Pedido cancelado antes do envio não entra na receita.
3. Mês validado não é reaberto. Devolução ou ajuste que chega depois entra no mês em que aconteceu, marcado como "ajuste de [mês de origem]".

O relatório mostra os dois números: o resultado do mês e o resultado corrigido do mês de origem.

**Decisão do Jean:** aprovar a data de referência e a regra de ajuste de mês fechado.

## Achados materiais

### R07 — Custo da mercadoria em devoluções depende da triagem

**Seções:** 6.3, 6.9, 11.2.

**Problema:** o documento separa bem os eventos de uma devolução, mas não diz o que acontece com o custo da mercadoria. A resposta depende da triagem do Estoque, e essa ligação não aparece nas passagens de responsabilidade (15.2).

**Correção sugerida:**

- **Item apto a voltar ao estoque:** o custo da mercadoria sai da venda, porque o produto voltou. Ficam como perda o frete de ida e volta e as taxas não reembolsadas.
- **Item não apto:** a mercadoria vira perda.
- **Antes da triagem:** a devolução fica "pendente de triagem" e o relatório avisa.

Adicionar em 15.2: "Estoque entrega a classificação da devolução para a Rentabilidade".

**Decisão do Jean:** aprovar a regra.

### R08 — ABC com produtos de contribuição negativa passa de 100%

**Seção:** 8.3.

**Problema:** a ABC por contribuição soma a participação de cada produto. Com produtos negativos no total, a conta distorce.

**Exemplo:** produto A contribui R$ 60, B R$ 50 e C −R$ 10. Total R$ 100. A soma acumulada de A e B dá 110%.

**Correção sugerida:** calcular a ABC só com os produtos de contribuição positiva. A base da porcentagem passa a ser a soma deles. Os negativos aparecem no "grupo de perda", que a 8.3 já prevê, com o valor total que estão tirando.

**Decisão do Jean:** nenhuma; é correção de conta. Os cortes da ABC continuam em P08.

### R09 — Venda de kit conta para o kit, para os componentes ou para os dois?

**Seções:** 6.6, 8.3, 11.1.

**Problema:** não está definido como uma venda de kit é contada em cada área.

**Impacto:** se a velocidade de venda de um componente ignorar os kits, a ruptura é prevista tarde demais. Se a ABC contar o kit e os componentes, a mesma venda aparece duas vezes.

**Correção sugerida:**

- **Margem e ABC:** contados por anúncio. O kit é um item próprio.
- **Estoque e giro:** contados por componente. Uma venda de kit "consome" seus componentes nas quantidades da composição.

Escrever essa regra nas três seções.

**Decisão do Jean:** nenhuma, salvo se preferir ver ABC também por componente.

### R10 — Gasto extremo de Ads não tem resposta rápida

**Seções:** 17.1, 18.1, 18.3.

**Problema:** "gasto de Ads extremamente elevado" é um dos três alertas prioritários. Mas toda ação depende de aprovação. Se o gasto disparar às 22h, ele continua até você ver a mensagem. Também não está definido quem aprova quando você não está disponível.

**Correção sugerida:** uma única ação pré-autorizada para emergências: limitar ou pausar a campanha quando o gasto do dia passar de X vezes o esperado. O X é definido por você, por cliente. A ação deve:

- avisar na hora;
- poder ser desfeita com um clique;
- só valer depois que o sistema tiver integração para executar.

Definir também um substituto para aprovações urgentes.

**Decisão do Jean:** aceitar ou não essa exceção e indicar o substituto.

### R11 — Coordenador e Analista de Conta fazem parte do mesmo trabalho

**Seções:** 3.3, 5.3, 8.2.

**Problema:** os dois "priorizam", "propõem plano com dono e prazo" e "acompanham a execução". Na prática, vão disputar a mesma tarefa ou repetir trabalho.

**Correção sugerida:**

- **Analista de Conta:** cuida do **o quê e por quê** (diagnóstico, gargalos, plano comercial).
- **Coordenador:** cuida do **quem, quando e em que pé está** (fila de tarefas, pedidos de aprovação, acompanhamento, resumo semanal).

Reescrever 5.3 e 8.2 com essa divisão.

**Decisão do Jean:** aprovar a divisão.

### R12 — Dados, Revisão e parte do Coordenador não precisam ser IA

**Seções:** 3.1, 12, 14, 5.

**Problema:** a 1 e a 22.2 já perguntam se as áreas de apoio podem ser procedimentos. A revisão confirma que sim para a maior parte:

- **Dados:** importar, achar duplicidade, conferir totais e mapear SKU são regras fixas.
- **Revisão:** conferir somas, impedir mistura de clientes e invalidar uma aprovação quando o custo muda também são regras fixas.
- **Coordenador:** a fila de tarefas e o controle de aprovações são uma tela do aplicativo.

**Impacto:** feito por regra fixa, é mais barato, dá sempre o mesmo resultado e pode ser testado. Feito por IA, pode errar de jeito diferente a cada vez.

**Correção sugerida:** marcar na tabela 3.1 o que é **regra fixa do sistema** e o que é **agente de IA**.

- **Regra fixa:** Dados, a maior parte da Revisão e o controle de tarefas e aprovações do Coordenador.
- **IA:** diagnóstico da Conta, interpretação de cenários de Rentabilidade e Ads, Criativos, leitura de mudanças de regra e textos de relatório.

**Decisão do Jean:** aprovar.

### R13 — Pesquisa de concorrência não tem dono nem fonte

**Seções:** 6.4 (passo 6), 12.

**Problema:** o processo de preço compara com a concorrência, mas nenhuma área coleta esses dados e nenhuma fonte está definida. O contexto anterior cita "ferramentas de pesquisa de mercado" sem nomear quais.

**Correção sugerida:** na primeira versão, a concorrência é informada por você ou anexada ao pedido de preço. A coleta automática vira tarefa do Serviço de Dados depois.

**Decisão do Jean:** indicar quais ferramentas de pesquisa já são usadas.

### R14 — O documento diz que o sistema não foi escolhido, mas já existe

**Seções:** 12.1, P15.

**Problema:** a 12.1 diz que não há decisão sobre banco, hospedagem ou ferramenta. Mas o TAKT Agents já existe: site na Vercel, banco no Supabase e código no GitHub, com login e conexão funcionando.

**Correção sugerida:** registrar em P15 como **decisão provisória**: aplicativo TAKT Agents, banco Supabase, hospedagem Vercel. Conectores e modelo de IA continuam em aberto.

**Decisão do Jean:** confirmar.

### R15 — Dados pessoais dos compradores não são tratados

**Seções:** 4.5, 12.

**Problema:** os relatórios de pedidos dos marketplaces trazem nome, endereço, telefone e às vezes CPF dos compradores. O documento cuida da separação entre clientes, mas não dos dados pessoais de quem compra.

**Impacto:** guardar esses dados sem necessidade cria risco de LGPD para você e para os clientes.

**Correção sugerida:** importar só os campos que os cálculos usam: pedido, data, SKU, quantidade, valores e estado de destino. Não guardar nome, endereço, telefone ou CPF na primeira versão. Na devolução, guardar só o número do pedido.

**Decisão do Jean:** aprovar.

## Observações

### R16 — Atualização de Regras e Educação podem vir depois

**Seções:** 10, 13.

Na primeira versão, as tarifas de cada canal podem ser cadastradas e versionadas por você, com data de início, sem monitoramento automático. A Educação pode começar só como o registro de aprendizados da 10.2 (caso, decisão, motivo), sem um agente dedicado. Os dois ganham valor quando houver vários clientes e canais.

### R17 — Contas conferidas e um alerta sobre ROAS

**Seções:** 6.4, 6.5, 6.7.

Conferi as contas:

- **Exemplo da 6.5:** 100 − 40 − 15 − 5 − 10 − 3 = R$ 27 antes de Ads; menos R$ 12 de Ads = R$ 15, ou seja, 15%. ROAS de equilíbrio 100 ÷ 27 = 3,70 e ROAS da meta 100 ÷ 12 = 8,33. Correto.
- **Fórmula da 6.4:** P = C ÷ (1 − t − a − m) está correta. As ressalvas sobre taxa por faixa também estão certas.
- **Recuperação da 6.7:** para chegar a 15% em R$ 2.000, a contribuição total precisa ser R$ 300. Já foram R$ 100, então faltam R$ 200 sobre R$ 1.000, ou seja, 20%. Correto.

**Alerta prático:** o limite que protege a margem é **Ads ÷ receita total** (TACOS), não o ROAS que o painel mostra.

No exemplo, a meta permite gastar até 12% da receita total. Se metade das vendas vier sem Ads, o ROAS que o painel precisa mostrar é R$ 50 ÷ R$ 12 = 4,17, e não 8,33. Usar o ROAS do painel como limite pode fazer o Ads cortar campanhas que estão dentro da margem. Sugiro que a 7.4 diga explicitamente que o limite oficial é o TACOS.

### R18 — Casos de teste que faltam

**Seção:** 20.2.

Incluir na tabela:

| Caso | Comportamento esperado |
| --- | --- |
| Venda com frete cobrado do comprador | Aplicar a base de receita aprovada em R02 |
| Produto com armazenagem no Full | Incluir ou excluir conforme a lista de R03 |
| Venda via afiliado ou criador | Somar a comissão ao marketing (R04) |
| Kit vendido com componente em falta | Prever ruptura do componente (R09) |
| Devolução ainda sem triagem | Marcar pendente, sem fechar o custo (R07) |
| Pedido pago em mês diferente da criação | Usar a data aprovada em R06 |
| Relatório com dados pessoais | Descartar os campos não usados (R15) |

## O que precisa estar decidido antes de construir

Para começar o cálculo de margem da primeira versão, faltam estas decisões:

1. **P01:** o que significa "contas próprias sem custos".
2. **P02:** qual conta, qual canal e qual fechamento de outubro usar como referência.
3. **P03:** de onde vêm os custos (qual planilha, quais colunas).
4. **R01 a R06:** nível da meta, base de receita, fixo × variável, afiliados, imposto e data da venda.

As outras pendências (P05 a P14) podem ser decididas durante a construção. Elas afetam etapas posteriores: Ads, alertas, WhatsApp, devoluções e autonomia.

## Proposta de primeira versão

A seção 20.1 já pede começar validando dados e cálculos sem mexer em conta. A proposta abaixo segue isso: **o sistema não altera nenhuma conta nem executa nenhuma ação.**

**Etapa 1 — Cadastro do cliente.** Cliente, canal, regime e alíquota de imposto, meta de margem e lista "entra / fica fora" (R03). Tabela de custos por SKU com data de início, importada da sua planilha. Composição dos kits.

**Etapa 2 — Importação de vendas.** Envio manual dos relatórios exportados do primeiro canal (provavelmente Mercado Livre): pedidos, tarifas e Ads dos três meses anteriores. Sem conexão automática ainda e sem dados pessoais (R15). O sistema avisa: vendas sem SKU, SKU sem custo, arquivos repetidos.

**Etapa 3 — Cálculo da margem.** Contribuição antes e depois de Ads por pedido, SKU, canal e mês, com as regras aprovadas em R01 a R06. É uma regra fixa, sem IA. Margem bloqueada quando falta um custo essencial (4.2).

**Etapa 4 — Conferência com outubro.** Comparar com o fechamento de outubro de 2026 e explicar cada diferença. Esse é o teste de aceite principal.

**Etapa 5 — Relatório mensal no aplicativo.** Resultado por cliente, canal e produto, ABC por contribuição (R08), lista de pendências e o que ficou fora da margem. Você valida e o relatório fica salvo como versão.

**Depois disso**, na ordem da 20.1:

1. Recomendação de preço com memória de cálculo (PR02, PR04).
2. Importação de Ads diária e alertas de estoque e Ads (17.1).
3. IA para diagnóstico e textos.
4. Execução assistida com aprovação.

**Critério de aceite da primeira versão:**

- O resultado de outubro bate com o fechamento de referência, dentro de uma diferença que você define (P04, 20.3), com cada diferença explicada.
- Os casos da 20.2 e da R18 que envolvem cálculo passam.
- Nenhum dado de um cliente aparece em outro.
