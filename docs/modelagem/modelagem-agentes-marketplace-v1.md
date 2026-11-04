# Modelagem operacional dos agentes de marketplace

Especificação de responsabilidades processos e critérios de revisão

Versão 1.0 | 4 de novembro de 2026 | Responsável pelas decisões: Jean Luca | Revisores: Jean Luca e Claude

O documento reúne as decisões vigentes e detalha a operação proposta dos agentes. A revisão deve confirmar responsabilidades, cálculos, aprovações e critérios de aceite antes da implementação.

> **Meta vigente:** 15% de margem após os custos da venda e Ads, antes das despesas fixas. A inclusão de despesas fixas será avaliada posteriormente.

> Origem: importado de `Codex/2026-11-04/cone/outputs/Modelagem-completa-agentes-marketplace-v1` (.md e .docx) em 4 de novembro de 2026. A capa do .docx foi incorporada acima; o restante é idêntico.

## 1 Finalidade e orientação da revisão

Este documento organiza a operação de agentes que atenderá as contas próprias e os clientes da gestão de ecommerce de Jean. Seu objetivo é permitir que Jean e Claude revisem o escopo, as responsabilidades, os cálculos, os processos de trabalho e as condições de autonomia antes da implementação.

A primeira versão buscará entregar 15% de margem de contribuição após os custos da venda e Ads, antes das despesas fixas. A margem será planejada na precificação e acompanhada no resultado mensal das vendas. A inclusão de despesas fixas será avaliada posteriormente. Os 15% são uma meta de trabalho, ajustável por projeto, e não uma garantia de resultado ou uma medida de lucro líquido do cliente.

A estrutura reúne cinco frentes especializadas e um coordenador. Estoque, devoluções, dados, atualização de regras e revisão são especialidades de apoio propostas. A separação de responsabilidades não exige que todas sejam executadas por modelos de IA independentes. Cálculos, validações, importações e controles repetitivos devem usar procedimentos verificáveis; interpretação, diagnóstico e redação podem ser apoiados por IA.

### 1.1 Como distinguir decisão de proposta

CONFIRMADO identifica uma decisão expressa de Jean. PROPOSTO identifica um detalhamento operacional recomendado para revisão, ainda sem aprovação de implantação. PENDENTE identifica uma informação ou escolha que falta. POSTERIOR identifica uma capacidade explicitamente adiada ou dependente de etapas futuras.

As cinco frentes e o coordenador estão confirmados como direção da modelagem. Os procedimentos detalhados de agentes ainda não entrevistados, os critérios numéricos de testes, os contratos de dados e os mecanismos de controle deste documento são PROPOSTOS. Sua inclusão não significa que Jean já os aprovou. Toda configuração não definida deve permanecer sem autorização operacional, em vez de receber um valor presumido.

### 1.2 Ordem de leitura e decisão

Jean deve revisar primeiro as decisões vigentes e as pendências que alteram o comportamento da operação. Claude deve revisar a consistência entre os agentes, a matemática, os limites de autonomia, os estados de falha e a viabilidade de implementação. O resultado esperado é uma lista de correções e decisões, seguida de uma versão consolidada aprovada; esta versão não autoriza alterações nas contas dos marketplaces.

## 2 Decisões vigentes do projeto

### 2.1 Público canais e catálogo

CONFIRMADO. A operação atenderá contas próprias e contas de clientes. As contas próprias serão tratadas como clientes no piloto. A ordem de prioridade dos canais é Mercado Livre, Shopee, TikTok Shop, Shein e Amazon. Essa ordem orienta a implantação, sem pressupor suporte pronto a todos os canais na primeira entrega.

O catálogo contempla produtos únicos, variações, kits e variações de kits, provenientes de fabricação, importação e revenda de marcas ou produtos genéricos. Será possível dividir grandes áreas em especialistas conforme a complexidade observada. A preferência de ERP é UpSeller, mas também existem operações em Bling, Olist, Tray e outros sistemas. A integração deve acomodar diferenças entre clientes.

### 2.2 Resultado esperado e política de margem

CONFIRMADO. O objetivo é lucro com crescimento, com metas e restrições adaptáveis ao projeto. A referência de margem trabalhada é 15%; a meta aspiracional é 20% ou mais. Jean mencionou atenção em 12% a 13% e compressão até 10% em poucos casos. Liquidação, lançamento, campanha e giro de estoque são justificativas aceitas para analisar exceções. Jean ou membros autorizados da equipe aprovam essas exceções.

PROPOSTO. Tratar todo resultado abaixo da meta do projeto como desvio ou exceção identificada, incluindo intervalos entre as referências mencionadas. Os 10% não devem virar uma autorização geral para reduzir preços. A faixa exata, sua duração e as condições de aplicação precisam constar na política do cliente. Abaixo de 10%, não aplicar automaticamente; encaminhar uma nova decisão específica a Jean. A política definitiva desses casos permanece pendente.

CONFIRMADO. A meta vigente é antes das despesas fixas. A definição anterior de margem após despesas fixas foi substituída expressamente. Não realizar rateio de despesas fixas na primeira versão. Não incluir inicialmente a remuneração da gestão no resultado do cliente. Um lucro mínimo em reais por unidade ou pedido poderá ser definido posteriormente, inclusive em projetos com cobrança por performance sobre faturamento.

### 2.3 Dados fechamento e entregas

CONFIRMADO. O fechamento será mensal, pelo mês da venda. O trabalho compreende relatórios de vendas, investimento em marketing e rentabilidade dentro dos custos disponibilizados; não compreende o fechamento financeiro integral da empresa cliente. Jean valida a entrega mensal. Custos deverão ser centralizados por Jean, provavelmente em planilhas, admitindo outras fontes por cliente. Impostos serão informados no cadastro do cliente.

Dados operacionais devem ser buscados nas contas, ERPs e relatórios disponíveis. A existência de acesso humano às contas não significa que uma API ou automação já está conectada. Dado essencial ausente interrompe a recomendação que dele depende e gera uma solicitação. Estimativas somente quando Jean solicitar ou autorizar, sempre identificadas. Custos adicionais não mapeados inicialmente serão incorporados conforme demanda; a relação de custos considerados deve acompanhar a análise.

Haverá alertas diários, resumo semanal objetivo, publicação semanal de relatórios no aplicativo e entrega mensal mais completa. Os relatórios mensais incluirão planos de ação para gargalos críticos, indicações para os menos críticos e acompanhamento de estratégias em curso. WhatsApp é o canal desejado de notificação, com integração e destinatários ainda por definir.

### 2.4 Aprovação aprendizado e piloto

CONFIRMADO. A sequência inicial é recomendar, obter aprovação de Jean e executar pelo agente. O objetivo posterior é autonomia crescente, sustentada por resultados positivos, testes A/B, visibilidade de metas e estratégias e resumos periódicos. O coordenador deverá manter a operação articulada. A frente educacional será dirigida à equipe e ao aprendizado dos próprios agentes.

O piloto usará contas próprias, com dados disponíveis e fechamento de outubro de 2026 para comparação. Para novas contas, importar os três meses anteriores ao início da gestão, conforme disponibilidade efetiva. Quando não houver fechamento fornecido, construir uma referência inicial usando os dados da plataforma, com limitações explícitas.

PENDENTE. Jean informou que as contas próprias não terão custos. É necessário confirmar se isso significa ausência de cobrança pela gestão. Não interpretar como custo zero de mercadoria, impostos, logística ou Ads.

## 3 Organização e responsabilidade final

### 3.1 Estrutura funcional

| Papel | Responsabilidade central | Situação |
| --- | --- | --- |
| Jean e equipe autorizada | Definir políticas e aprovar decisões conforme alçada | Confirmado |
| Coordenador | Consolidar objetivos prioridades estratégias e execução | Direção confirmada e processo proposto |
| Analista de Conta | Diagnosticar a operação e acompanhar o plano comercial | Frente confirmada e detalhamento proposto |
| Precificação e Rentabilidade | Formar preços definir limites e conferir margem realizada | Escopo central confirmado |
| Ads | Distribuir investimento e executar estratégias dentro dos limites | Divisão confirmada e detalhamento proposto |
| Criativos | Produzir e testar conteúdo dos anúncios | Frente confirmada e detalhamento proposto |
| Educação e Aprendizado | Formar equipe e manter procedimentos e aprendizados | Público confirmado e detalhamento proposto |
| Estoque e Devoluções | Cobertura ruptura e triagem de itens devolvidos | Especialidade proposta com processo de devoluções solicitado |
| Dados e Integrações | Coletar padronizar validar e rastrear informações | Serviço compartilhado proposto |
| Atualização de Regras | Coletar e avaliar mudanças oficiais das plataformas | Especialidade solicitada e processo proposto |
| Revisão e Qualidade | Conferir cálculos coerência e alterações relevantes | Serviço compartilhado proposto |

### 3.2 Autoridade e resolução de conflitos

PROPOSTO. O coordenador organiza a execução, mas não amplia permissões, orçamento ou exceções por conta própria. O agente de Rentabilidade é responsável pela base econômica; Ads é responsável pelo plano de mídia; Estoque informa restrições de disponibilidade; Conta avalia coerência comercial. Nenhum desses papéis pode sobrescrever a fonte do outro sem registrar uma divergência.

Quando uma recomendação conflitar com a margem ou o estoque, o coordenador solicita cenários compatíveis. Caso o conflito permaneça, apresenta a Jean os benefícios, custos, incertezas e decisão necessária. Uma campanha aprovada continua sujeita às condições de validade da aprovação. Uma recomendação comercial não equivale a uma ordem de compra de mercadoria.

### 3.3 Matriz de decisões

| Decisão ou entrega | Prepara | Confere | Aprova inicialmente |
| --- | --- | --- | --- |
| Política e metas do projeto | Coordenador com Conta | Rentabilidade e Jean | Jean |
| Preço e limite de desconto | Rentabilidade | Revisão e Conta | Jean |
| Verba e alterações de Ads | Ads | Rentabilidade e Estoque | Jean e alçada a definir |
| Conteúdo e publicação | Criativos | Conta e regras do canal | Jean ou equipe designada |
| Exceção de margem | Rentabilidade com Ads e Conta | Coordenador | Jean ou equipe autorizada |
| Triagem de devolução | Estoque e Devoluções | Inspeção humana quando necessária | Jean no processo inicial |
| Resultado mensal | Rentabilidade com Dados | Revisão e Coordenador | Jean |
| Mudança em regra interna | Atualização com área afetada | Revisão | Conforme política de mudança a definir |

## 4 Regras comuns de trabalho

### 4.1 Contexto obrigatório por cliente

PROPOSTO. Cada agente recebe a identificação do cliente, projeto, conta, canal, período, fuso comercial e versão da política aplicável. Recebe também objetivo, metas, exceções ativas, fontes disponíveis, qualidade dos dados, ações autorizadas e pessoas responsáveis. Para contas brasileiras do piloto, propor America/Sao_Paulo como fuso de referência, confirmando diferenças nos cortes dos relatórios das plataformas.

A configuração deve separar política comercial de cada cliente, categoria e produto. A precedência proposta é: condição específica de uma estratégia aprovada; regra explícita do produto; regra da categoria; regra geral do cliente. Toda exceção precisa indicar escopo e validade. Restrições oficiais do canal e limites de acesso prevalecem sobre uma preferência comercial incompatível. Conflitos sem regra clara exigem decisão de Jean.

### 4.2 Entrada validação e bloqueio

PROPOSTO. Antes de analisar, verificar se os dados correspondem ao cliente e período certos, se estão completos, se a moeda e unidades são consistentes e se há duplicidades. Não transformar ausência em zero. Valores zero precisam ser confirmados ou comprovados pela fonte. Um custo antigo não é automaticamente um custo válido para uma venda nova.

Ao encontrar dado essencial ausente, bloquear somente a recomendação afetada, listar a informação necessária, indicar quem deve fornecê-la e registrar o pedido. As análises independentes podem continuar. Uma simulação autorizada fica separada do resultado realizado e não habilita execução automática. Valores estimados devem informar origem, finalidade, intervalo ou cenário e impacto na conclusão.

### 4.3 Registro obrigatório de toda recomendação

PROPOSTO. Registrar problema, evidência, período, produtos ou campanhas afetados, ação sugerida, cenário de referência, impacto esperado, premissas, custos considerados, dados ausentes, confiança explicada, responsável, validade e condições de interrupção. Confiança deve refletir evidências e limitações; não usar um percentual inventado para aparentar precisão.

Quando houver execução, adicionar aprovador, conteúdo exato aprovado, instante da aprovação, valores anteriores e posteriores, resultado retornado pelo canal e confirmação da alteração. Se uma ação depender de várias alterações, explicitar a ordem e o que fazer em caso de execução parcial.

### 4.4 Ciclo de execução

PROPOSTO. As etapas são: coletar; validar; analisar; revisar; propor; aguardar aprovação; executar; conferir; acompanhar; concluir ou corrigir. Os estados possíveis incluem dados pendentes, em análise, em revisão, aguardando aprovação, aprovado, executando, executado e verificado, falha e cancelado. A conclusão exige evidência de verificação, não apenas um comando enviado.

Uma aprovação deve ser invalidada quando preço, custo, estoque, verba, regra ou contexto material mudar antes da execução. Repetições precisam reconhecer ações já realizadas para evitar duplicidade. Respostas incertas de uma plataforma exigem consulta ao estado atual antes de tentar novamente.

### 4.5 Limites de escopo

CONFIRMADO quanto ao escopo financeiro e PROPOSTO quanto aos controles. Não assumir acesso ou integração inexistentes. Não misturar dados, políticas ou aprovações entre clientes. Não usar os dados de um cliente em treinamento compartilhado sem política aprovada. Não assumir que uma meta de margem constitui garantia de entrega. Não incluir despesas fixas, remuneração da gestão ou custos desconhecidos como se já estivessem no cálculo.

## 5 Agente Coordenador

### 5.1 Missão e fronteiras

Direção CONFIRMADA e processos PROPOSTOS. Manter os agentes trabalhando sobre o mesmo plano de cada cliente, transformar diagnósticos em prioridades e garantir que metas, restrições e aprovações sejam respeitadas. O coordenador responde pela consistência da operação e pela comunicação com Jean. Não substitui os cálculos de Rentabilidade, o julgamento especializado de Ads ou a validação final de Jean.

### 5.2 Entradas e entregas

Recebe o cadastro do cliente, metas, calendário comercial, histórico, relatórios especializados, fila de alertas, tarefas abertas, exceções e permissões. Entrega plano por cliente, lista de prioridades, proposta consolidada, pedidos de aprovação, resumo semanal e pauta do fechamento. Cada tarefa deve ter dono, prazo, resultado verificável e dependências.

### 5.3 Processo de planejamento

1. Confirmar versão da política e estágio do cliente, distinguindo implantação, operação recorrente e campanha especial.
2. Solicitar a Conta o diagnóstico, a Rentabilidade os limites econômicos e a Estoque as restrições de disponibilidade.
3. Solicitar a Ads e Criativos cenários compatíveis com essas condições.
4. Ordenar ações por impacto esperado, urgência, qualidade da evidência, esforço e dependências. Evitar pontuação numérica sem critério acordado.
5. Apresentar a Jean o plano com orçamento, margem esperada, riscos e decisões pendentes.
6. Após aprovação, distribuir tarefas e acompanhar execução e resultados; atualizar o plano se as premissas mudarem.

### 5.4 Processo de acompanhamento

Na rotina diária, verificar novos bloqueios, alertas críticos, falhas de integração e ações aprovadas ainda não confirmadas. Na rotina semanal, revisar estratégias, experimentos, pendências e evolução das metas e publicar o resumo no aplicativo. No mês fechado, assegurar que o relatório de resultado esteja coerente com o plano e as exceções autorizadas, antes da validação de Jean.

### 5.5 Critérios de qualidade e falhas

Medir tarefas concluídas com verificação, tempo de resolução, ações fora de política, aprovações vencidas e recomendações sem evidência. Se dois agentes discordarem, registrar as alternativas e seus fundamentos. Se uma fonte estiver indisponível, sinalizar quais conclusões estão comprometidas e evitar que o restante da operação trate dados antigos como atuais.

## 6 Agente de Precificação Rentabilidade e Fechamento

### 6.1 Missão e responsabilidade

CONFIRMADO. Formar preços de produtos novos, revisar preços existentes, avaliar promoções e kits, apoiar estratégias de preço versus Ads e conferir a margem realizada. O indicador central é margem de contribuição após Ads antes das despesas fixas, com referência de 15% e regras por projeto. O agente deve explicar divergências entre o planejado e o realizado e propor correções.

Não é responsável pelo fechamento contábil ou financeiro integral do cliente. O termo fechamento neste projeto significa apuração mensal das vendas e dos custos considerados no escopo da gestão, com validação por Jean.

### 6.2 Entradas necessárias

CONFIRMADO em origem e PROPOSTO em detalhamento. Receber custo de mercadoria e sua vigência, composição de kits, dados tributários cadastrados, taxas e regras do canal, logística, descontos, cupons, subsídios, Ads, perdas e ressarcimentos conhecidos, vendas, devoluções e política de margem. Separar valor cobrado do comprador, valor financiado pela plataforma e custo efetivo do vendedor.

Custos adicionais como montagem, embalagem ou frete de aquisição somente entram como valores conhecidos ou simulações autorizadas. Quando Jean decidir excluí-los inicialmente, registrar a exclusão no cadastro e no relatório. Um custo excluído não pode ser confundido com custo confirmado como zero. Identificar o efeito da exclusão quando puder ser calculado.

### 6.3 Base de cálculo proposta

PROPOSTO para revisão matemática. Para cada período e escopo, definir receita do vendedor como o valor das vendas reconhecidas, líquido dos descontos financiados pelo vendedor e das devoluções/cancelamentos reconhecidos, acrescido de receitas ou subsídios efetivamente atribuíveis. O tratamento de frete e incentivos deve ser mapeado por canal, evitando usar o repasse bancário como substituto da receita.

Contribuição antes de Ads = receita do vendedor menos mercadoria, impostos, taxas, logística e demais custos variáveis incluídos, com ajustes líquidos de perdas e ressarcimentos não contabilizados anteriormente.

Contribuição após Ads = contribuição antes de Ads menos investimento de Ads alocado ao mesmo escopo e período.

Margem após Ads = contribuição após Ads dividida pela receita do vendedor. Com receita zero ou negativa, o indicador percentual deve ser marcado como não interpretável; manter valores em reais e explicar o motivo. A margem consolidada é a soma das contribuições dividida pela soma das receitas, não a média simples das margens dos produtos.

O detalhamento de bases tributárias, tarifas, reconhecimento de reembolsos e atribuição de Ads será específico por canal. Este documento não estabelece alíquotas, tarifas ou regras atuais de plataformas. As regras vigentes deverão ser comprovadas e versionadas na implantação.

### 6.4 Processo de formação e revisão de preço

1. Identificar cliente, canal, anúncio, SKU e variação, além da composição de kits aplicável.
2. Validar custos vigentes, dados tributários e regra comercial aplicável ao preço candidato.
3. Identificar a meta do projeto, restrições de mercado, estratégias em andamento e exceções aprovadas.
4. Calcular cenário atual, equilíbrio antes de Ads, limite de Ads e cenário de margem alvo.
5. Simular preço, desconto e investimento de forma conjunta; aplicar tarifas por faixa e condições de campanha reais.
6. Comparar com concorrência observada, incluindo diferenças de produto, quantidade, logística e condições. Não presumir que preço concorrente revela sua margem.
7. Emitir recomendação com memória de cálculo, preço resultante, margem esperada, prazo de validade e bloqueios.
8. Obter aprovação, executar se houver integração habilitada, conferir o preço publicado e monitorar o resultado.

Para um caso simplificado em que P é o preço, C são custos em reais por unidade, t são custos proporcionais ao preço, a é Ads como fração da mesma receita e m é a margem desejada, P = C / (1 - t - a - m). Usar somente se todas as premissas forem válidas e o denominador for positivo. Se houver taxas por faixa, bases diferentes, frete variável ou limites de campanha, calcular por cenários com a regra efetiva e verificar a solução; não aplicar a fórmula simplificada indiscriminadamente.

### 6.5 Exemplo numérico de conferência

Exemplo hipotético, sem tarifas reais de plataforma: receita de R$ 100, mercadoria de R$ 40, taxas de R$ 15, impostos de R$ 5, logística de R$ 10 e outros custos variáveis incluídos de R$ 3. A contribuição antes de Ads é R$ 27. Com Ads de R$ 12, a contribuição após Ads é R$ 15 e a margem é 15%. Despesas fixas e remuneração da gestão não estão incluídas.

Nesse cenário, R$ 27 é o limite de Ads para contribuição zero; R$ 12 é o limite para preservar 15%. Se cada pedido contiver uma unidade e a receita atribuída ao Ads tiver a mesma base de R$ 100, o ROAS de equilíbrio é aproximadamente 3,70 e o ROAS para a meta é aproximadamente 8,33. Essa equivalência não se mantém automaticamente quando a receita atribuída pela plataforma tiver outra base, janela ou composição de pedidos.

### 6.6 Custeio de kits e variações

PROPOSTO. Registrar componentes, quantidades, identificação da variação e validade da composição. O custo do kit é a soma dos componentes nas quantidades corretas, acrescida dos custos específicos incluídos. Embalagem ou montagem já incorporadas ao custo não podem ser adicionadas novamente. Kits virtuais e físicos precisam de mapeamento de estoque consistente. Uma alteração da composição ou do custo deve invalidar recomendações dependentes ainda não executadas.

### 6.7 Margem comprimida e recuperação

CONFIRMADO quanto à necessidade de planejar recuperação e PROPOSTO quanto ao método. Antes de uma liquidação ou outra ação com margem reduzida, documentar justificativa, produtos, preço, quantidade, prazo, verba de Ads e cenário de saída. Mostrar preço médio ponderado pelas unidades e margem consolidada do ciclo da estratégia; preço médio isolado não garante margem.

Calcular quanto de contribuição adicional será necessário após a campanha para alcançar a meta do ciclo. Exemplo: primeira etapa com receita de R$ 1.000 e contribuição de R$ 100; para atingir 15% em receita total de R$ 2.000, a segunda etapa precisa entregar R$ 200 de contribuição, equivalentes a 20% sobre os outros R$ 1.000. Explicitar se volume, estoque, demanda e margem futura tornam essa recuperação plausível. Não prometer recuperação com base apenas em aumento futuro de preço.

### 6.8 Processo de apuração mensal

1. Fixar período por mês da venda, fonte e data de corte. Identificar registros ainda incompletos.
2. Consolidar pedidos e itens, descontos, custos, taxas e logística, preservando sua origem.
3. Conferir cancelamentos, devoluções, ressarcimentos e diferenças de liquidação sem dupla contagem.
4. Reconciliar gasto total de Ads e explicar sua atribuição a produto, campanha e canal.
5. Comparar com a referência inicial e o plano do mês, destacando mudanças de mix, preço, custo, Ads e perdas.
6. Emitir resultado por cliente, canal, categoria e produto quando os dados sustentarem esse nível.
7. Registrar pendências e separar resultado preliminar de resultado validado. Submeter a Jean.
8. Incorporar ajustes posteriores mediante nova versão, preservando a versão entregue e o motivo da alteração.

PROPOSTO. Custos de pedidos pertencem ao mês da venda; Ads diário pertence ao mês do gasto. Devoluções tardias podem gerar ajuste vinculado ao pedido original, com versão do resultado afetado e data do evento. A regra final para reabertura ou ajuste em mês posterior deverá ser aprovada por Jean. Não misturar competência de venda e recebimento sem indicar a diferença.

### 6.9 Ads sem atribuição e perdas

PROPOSTO. Todo gasto de Ads do escopo deve aparecer uma única vez no total. Quando a atribuição a SKU for incompleta, manter uma parcela não atribuída e explicar o efeito no consolidado. Um rateio analítico pode ser proposto, mas deve ser identificado e não altera a origem do gasto. Não declarar que cada produto tem margem exata após Ads se o gasto foi estimado ou rateado.

Para perdas futuras, a proposta é provisionar apenas quando houver histórico suficiente ou autorização para estimativa. No realizado, substituir a provisão correspondente pelos eventos efetivos. Devolução de receita, recuperação da mercadoria, reversão de imposto/taxa e ressarcimento são eventos diferentes e devem ser conciliados. Uma mercadoria recuperada não elimina automaticamente todos os custos da devolução.

### 6.10 Entrega e critérios de aceitação

O relatório deve permitir reproduzir os cálculos, indicar a política e os custos considerados, explicar os desvios, mostrar valores em reais e percentuais e separar dados conhecidos de estimativas. Critérios propostos: total reconciliado com as fontes, ausência de duplicidade, contribuição consistente entre níveis, exceções rastreáveis e validação de Jean. Erros de base, dados essenciais ausentes ou diferença material sem explicação impedem classificar o resultado como validado.

## 7 Agente de Ads

### 7.1 Missão entradas e limites

Divisão de responsabilidades CONFIRMADA e processos PROPOSTOS. Planejar a distribuição do investimento e executar estratégias aprovadas dentro dos limites calculados por Rentabilidade. O objetivo é crescimento rentável; impressões, cliques e ROAS são indicadores intermediários e precisam ser relacionados a conversão e contribuição.

Receber metas do cliente, calendário anual, histórico mensal, vendas e Ads dos três meses anteriores, limites por produto, estoque, campanhas, criativos e restrições dos canais. O orçamento mensal por cliente/canal e sua alçada de aprovação ainda precisam ser confirmados. A referência de margem de 10% não é um orçamento de Ads.

### 7.2 Processo de planejamento mensal

1. Revisar histórico com atenção a sazonalidade, promoções, rupturas e mudanças de catálogo.
2. Selecionar produtos elegíveis considerando margem, estoque, demanda e objetivos do projeto.
3. Receber limites de aquisição e margem de Rentabilidade e capacidade de atendimento de Estoque.
4. Apresentar cenários de investimento com hipóteses de venda e resultado, separando projeção de compromisso.
5. Distribuir a verba proposta entre canais e campanhas, incluindo reserva de testes se aprovada.
6. Definir ritmo de gasto, calendário, hipóteses, critérios de interrupção e revisão.
7. Submeter a aprovação e executar somente os objetos e valores aprovados.

### 7.3 Processo diário de acompanhamento

Verificar atualização do relatório, gasto do dia e acumulado, ritmo frente ao orçamento, entrega, elegibilidade e disponibilidade dos produtos. Distinguir campanha sem entrega, campanha pausada, verba esgotada, problema de conta e produto sem cobertura publicitária. O significado operacional de falta de Ads deve ser confirmado com Jean.

Comparar anomalias com o ritmo esperado para o horário e o calendário. Gasto alto em promoção programada não é automaticamente um incidente. Uma elevação inesperada deve gerar evidência, impacto estimado e cenário de ação. Pausas, mudanças de lance e redistribuição de verba dependem de aprovação inicial ou de uma autorização recorrente futura específica.

### 7.4 Preço e Ads como decisão conjunta

Apresentar ao menos cenário atual e alternativa pertinente: reduzir preço e manter Ads, preservar preço e alterar Ads ou ajustar ambos. Cada cenário deve informar receita, contribuição por venda, volume necessário, investimento e dependência de conversão. Se não houver evidência suficiente para prever volume, expor a hipótese e propor teste limitado, em vez de afirmar o resultado.

O ROAS atribuído do canal deve preservar sua definição de receita e janela. TACOS pode ser apresentado como gasto total de Ads dividido pela receita total comparável. Não somar receitas atribuídas de fontes com sobreposição. ROAS alto não prova aumento incremental; o teste deve considerar vendas totais e contribuição.

### 7.5 Testes e aceitação

Cada teste precisa de hipótese, variável principal, público ou produtos, grupo de comparação quando viável, duração, verba máxima, critério de sucesso e proteção de margem. Evitar alterar preço, criativo e investimento simultaneamente se a intenção for identificar o efeito de uma variável. Se o canal não permitir separação confiável, registrar o teste como comparação operacional com limitações, não como experimento causal conclusivo.

Entrega: plano mensal, proposta de alterações, diário de execução, leitura semanal e contribuição para o relatório mensal. Medir resultado após custos, respeito ao orçamento, qualidade dos testes e frequência de recomendações revertidas. Não avaliar o agente apenas por gasto ou impressões.

## 8 Agente Analista de Conta

### 8.1 Missão e entradas

Frente CONFIRMADA e processos PROPOSTOS. Diagnosticar a saúde comercial da conta, identificar gargalos, acompanhar o plano e relacionar informações de rentabilidade, Ads, conteúdo e estoque. Trabalhar com pedidos, itens, tráfego, conversão, avaliações e indicadores operacionais efetivamente disponíveis, sem presumir que todos os canais oferecem os mesmos campos.

### 8.2 Processo de diagnóstico inicial

1. Confirmar objetivo do projeto, maturidade da conta, catálogo, canais e acesso a dados.
2. Construir referência dos três meses anteriores, identificando sazonalidade e lacunas.
3. Mapear produtos relevantes, disponibilidade, desempenho de anúncios e qualidade do cadastro.
4. Cruzar os sintomas com Rentabilidade, Ads e Estoque. Queda de venda pode decorrer de ruptura, preço, entrega, demanda ou publicidade; evitar atribuição automática.
5. Classificar gargalos por criticidade e propor plano com dono, prazo, indicador e evidência esperada.
6. Submeter prioridades ao coordenador e acompanhar sua execução.

### 8.3 Classificação de produtos

CONFIRMADO quanto ao objetivo de ABC e aprendizado; metodologia PROPOSTA. Manter uma ABC por contribuição total em reais como visão principal e uma ABC por faturamento como apoio. Separar margem percentual, participação na contribuição e crescimento. Produto que fatura muito pode não contribuir o suficiente; produto de pouca receita pode ter boa margem e pouca escala.

Ordenar os produtos pela métrica e calcular participação e participação acumulada. Os cortes de A, B e C, a janela e a frequência serão aprovados antes de uso. Não fixar automaticamente a divisão 80/15/5. Produtos com contribuição negativa devem aparecer em grupo de perda, e produtos sem dados suficientes em observação, sem forçar uma classificação enganosa.

Registrar também dependência de Ads, giro, cobertura, devoluções, sazonalidade e confiabilidade dos custos. A referência histórica deve reconhecer períodos de indisponibilidade. A classificação serve para orientar perguntas e alocação, sem automaticamente autorizar investimento, liquidação ou descontinuação.

### 8.4 Rotina e entregas

Na semana, mostrar evolução dos principais produtos, gargalos críticos, ações concluídas e pendências. No mês, explicar se o crescimento veio de volume, preço ou mix, e como afetou a contribuição. Para estratégias já compreendidas, informar estágio e resultado parcial antes de recomendar novas intervenções. Não tratar um efeito esperado de uma estratégia como um incidente novo sem contexto.

Entregar diagnóstico, mapa de prioridades, ABC, briefing para Criativos e plano comercial. Critérios de aceitação: problema sustentado por dados, alternativas consideradas, responsabilidade definida e acompanhamento do resultado. O agente não pode declarar causalidade apenas porque dois indicadores mudaram juntos.

## 9 Agente de Criativos e Conteúdo de Anúncios

### 9.1 Missão e entradas

Frente CONFIRMADA e processos PROPOSTOS. Produzir imagens, títulos, descrições, peças e vídeos dos produtos priorizados por Conta, Ads e coordenador. Receber dados reais do produto, variação e kit, fotos de referência, especificações, público, posicionamento, restrições de marca e regras atuais do canal.

### 9.2 Processo de produção

1. Confirmar produto, quantidade, medidas, material, diferenciais comprováveis e promessa comercial permitida.
2. Identificar o objetivo da peça: apresentação, explicação, comparação de variações, remoção de dúvida ou teste de conversão.
3. Elaborar briefing e alternativas com a variável a testar e justificativa.
4. Produzir materiais no formato exigido pela superfície de destino, com versão identificada.
5. Conferir fidelidade ao produto, composição do kit, texto, legibilidade e regras do canal.
6. Encaminhar para revisão e aprovação; publicar apenas quando a ação estiver autorizada e a integração existir.
7. Relacionar a versão publicada ao período de desempenho e registrar aprendizados do teste.

### 9.3 Limites e critérios de qualidade

Não inventar certificações, benefícios técnicos, componentes, avaliações, resultados de uso ou características ausentes. Não representar uma quantidade de kit diferente da oferta. Se uma imagem gerada alterar cor, proporção, acessórios ou acabamento, corrigir antes da aprovação. Alterações de preço e promoções dependem da política de Rentabilidade, mesmo quando aparecem em uma peça.

As especificações concretas de resolução, duração, limites de caracteres e superfícies serão verificadas por canal no momento da implementação. O documento não presume um padrão único. Entregas incluem briefing, arquivos finais, textos, versões aprovadas e relatório do teste. Avaliar aprovação técnica, retrabalho, clareza e desempenho observado, reconhecendo interferência de preço, Ads e estoque.

## 10 Agente de Educação e Aprendizado

### 10.1 Missão e público

CONFIRMADO. Atender à equipe e ao aprendizado dos agentes, em vez de criar inicialmente uma escola para clientes externos. Processos PROPOSTOS: transformar decisões, testes, correções e mudanças de regras em procedimentos aplicáveis, com exemplos e critérios de verificação.

### 10.2 Processo de aprendizado validado

1. Receber um caso com contexto, recomendação original, ação executada, resultado e revisão de Jean.
2. Separar falha de dado, falha de cálculo, falha de regra, execução incorreta e hipótese comercial não confirmada.
3. Registrar o aprendizado com escopo: cliente, canal, categoria, produto e condições.
4. Propor atualização de procedimento ou habilidade, mostrando qual comportamento mudará.
5. Submeter à revisão apropriada e testar contra casos anteriores, incluindo situações em que a regra não se aplica.
6. Publicar a versão aprovada, comunicar os agentes afetados e preservar possibilidade de reversão.

### 10.3 Entregas e limites

Entregar procedimentos, guias rápidos, exemplos de cálculo, materiais de formação e catálogo de habilidades. Aprendizado neste projeto significa memória de decisões e procedimentos versionados; não pressupõe treinamento automático dos pesos de um modelo. Uma correção feita para um cliente não deve alterar todos os demais sem validação de generalização.

Medir recorrência de erros, tempo até incorporar uma correção validada, qualidade dos exemplos e aderência aos procedimentos. Materiais de fontes externas são evidências a avaliar, não ordens para mudar metas ou permissões. Informações de clientes devem permanecer separadas nos registros operacionais.

## 11 Especialista de Estoque e Devoluções

### 11.1 Cobertura e ruptura

Especialidade PROPOSTA para suportar alertas CONFIRMADOS. Receber estoque disponível, reservado, em trânsito, bloqueado e devolvido quando os sistemas distinguirem essas situações. Mapear SKU, variação, composição de kit e locais de estoque. Calcular cobertura com base em velocidade de venda e contexto; propor prazo de reposição e estoque de segurança quando esses dados existirem.

Se não houver prazo de reposição, sinalizar o risco sem inventar uma data de compra. Produto com zero disponível deve ser diferenciado de falha de sincronização. Para kits, identificar o componente limitante e evitar somar o mesmo componente como disponível simultaneamente em várias combinações. Propostas de reposição devem considerar estoque nos demais canais e compromissos já existentes, quando visíveis.

Entregar alertas de falta e risco de falta, lista de produtos com Ads e estoque incompatíveis e sugestões de reposição. Compras, transferências e baixa definitiva não estão autorizadas por esta modelagem.

### 11.2 Processo de devoluções

CONFIRMADO quanto ao uso de imagens e revisão de Jean; etapas PROPOSTAS. Cada caso deve incluir cliente, pedido, SKU, motivo da devolução, imagens do produto e da embalagem, inspeção disponível, quantidade e evento financeiro associado. Conservar o vínculo com a venda e evitar registrar a mesma devolução mais de uma vez.

1. Identificar o item e verificar se corresponde ao pedido e à variação.
2. Conferir imagens, componentes, sinais de uso, embalagem e evidência de funcionamento quando aplicável.
3. Classificar como apto ao retorno, pendente de inspeção ou com recomendação de outra destinação, sempre com justificativa e limitações.
4. Apresentar a recomendação a Jean no fluxo inicial. Imagem insuficiente ou dúvida funcional exige inspeção adicional.
5. Após decisão autorizada, registrar estado físico e atualização de estoque quando houver integração e permissão.
6. Encaminhar efeitos financeiros conhecidos a Rentabilidade, incluindo ressarcimentos e custos não recuperados.
7. Se Jean discordar, guardar avaliação original, justificativa da revisão e resultado final para aprendizado.

Fotos não comprovam por si só funcionamento, higiene, segurança ou integridade interna. Não liberar automaticamente um produto com evidência insuficiente. Descarte, reparo e revenda em condição diferente exigem processo próprio ainda não definido.

## 12 Serviço de Dados e Integrações

### 12.1 Missão e origem dos dados

PROPOSTO. Disponibilizar dados coerentes aos agentes, mantendo a origem e a qualidade. Priorizar dados operacionais das plataformas; ERPs e planilhas complementam custos, kits e cadastros conforme a configuração do cliente. A fonte principal deve ser definida por campo, sem presumir que plataforma e ERP concordarão em tudo.

O aplicativo será o ponto de consulta e publicação de relatórios. A fonte central de custos, os conectores, o armazenamento e a infraestrutura ainda serão selecionados. Não há decisão de implementação neste documento sobre fornecedor de banco, orquestrador, modelo, hospedagem ou ferramenta de automação.

### 12.2 Processo de importação

1. Registrar cliente, conta, tipo de relatório, intervalo, data de extração e origem.
2. Preservar arquivo ou resposta original para rastreio, conforme acesso e retenção definidos.
3. Validar estrutura, campos obrigatórios, datas, moeda, unidades e identificadores.
4. Mapear anúncios e variações ao SKU, e kits aos seus componentes, sinalizando ambiguidades.
5. Detectar duplicidade e diferenças entre extrações sobrepostas.
6. Normalizar os campos, mantendo valor original e regra de transformação verificável.
7. Conciliar totais e publicar o conjunto validado com status e limitações.
8. Notificar áreas afetadas quando houver atraso, alteração retroativa ou inconsistência material.

### 12.3 Qualidade e falhas

Relatar atualidade, cobertura, campos ausentes, itens sem custo, vendas sem SKU, divergências de total e Ads sem atribuição. Não preencher dados essenciais por inferência silenciosa. Caso uma plataforma deixe de responder, manter último conjunto identificado como antigo e bloquear recomendações que dependam de atualidade. Uma reimportação não deve duplicar pedidos ou gastos.

PROPOSTO. Usar mapeamento específico por canal para regras, campos e permissões; separar a lógica econômica comum das particularidades da plataforma. O suporte a cada novo canal só deve ser declarado quando os dados, cálculos e ações pretendidas passarem pela validação do piloto.

## 13 Especialista de Atualização de Regras Oficiais

### 13.1 Missão e fontes

Especialidade solicitada por Jean; processo PROPOSTO. Monitorar páginas oficiais de educação de vendedores e outros comunicados oficiais indicados por Jean. Coletar alterações de taxas, regras de Ads, campanhas, logística, anúncios e procedimentos que afetem a operação. Uma cópia repetida da mesma notícia não constitui uma nova confirmação independente.

### 13.2 Processo de atualização

1. Manter catálogo de fontes por canal, país, assunto e data da última verificação.
2. Detectar mudança e guardar trecho relevante, endereço, data de coleta e documento anterior.
3. Identificar publicação, início de vigência, tipo de conta, categoria e demais condições de aplicação.
4. Distinguir anúncio futuro, regra vigente, exemplo educacional e condição particular de conta.
5. Comparar com a configuração atual e estimar impacto nas contas afetadas usando exemplos verificáveis.
6. Encaminhar ao especialista responsável e à revisão. Em caso de conflito entre fontes, interromper a mudança afetada e pedir esclarecimento.
7. Comunicar a Jean o que mudou, quem será afetado, quando e qual tratamento será adotado.
8. Aplicar apenas segundo a política de aprovação da mudança e preservar versões, inclusive para reprocessar períodos históricos.

CONFIRMADO. Jean admite validação pelos agentes quando houver lastro e ele estiver ciente. PENDENTE. Definir quais mudanças podem entrar após notificação e quais exigem aprovação prévia. Na fase inicial, uma mudança que altere preços, verba, margem ou ação em conta segue o fluxo de aprovação dessas ações. Informação coletada não amplia a autonomia dos agentes.

### 13.3 Entregas e avaliação

Entregar registro de mudanças, parecer de aplicabilidade, impacto estimado e tarefas para áreas afetadas. Medir fontes verificadas, regras sem vigência definida, mudanças aplicadas fora do escopo e tempo entre confirmação e comunicação. Não prometer monitoramento instantâneo ou cobertura total antes de definir acesso e frequência.

## 14 Serviço de Revisão e Qualidade

### 14.1 Missão

PROPOSTO. Realizar uma conferência distinta da geração original para cálculos, relatórios e mudanças relevantes. Pode combinar regras determinísticas, casos de referência e revisão por agente. Outro modelo de IA não torna uma conclusão correta por si só; a revisão precisa usar dados e critérios independentes da redação original.

### 14.2 Processo e critérios

Conferir identificação do cliente e período, versão dos dados, custos essenciais, fórmulas, totais, atribuição de Ads, política vigente e exceções. Em uma alteração, comparar proposta, aprovação e ação efetiva. Em um relatório, conferir coerência entre produto, canal e consolidado e identificar conclusões que os dados não sustentam.

Classificar achados como impeditivos, materiais para correção ou observações. Um erro que troca cliente, usa custo desconhecido, duplica Ads, viola aprovação ou altera o sentido da margem é impeditivo. Uma diferença de arredondamento deve ter tolerância documentada, ainda a definir. Rejeição deve informar o dado ou regra afetado e como corrigir.

Entregar parecer, lista de divergências e confirmação dos critérios cumpridos. A aprovação humana não substitui a correção de um erro identificado; o sistema deve apresentar a divergência antes da ação.

## 15 Contratos de informação entre os agentes

### 15.1 Objetos mínimos propostos

Estes objetos são contratos operacionais, não um esquema físico de banco de dados. Sua implementação e tecnologia permanecem abertas. Todos precisam de identificador, cliente, origem, versão, criação, responsável e estado quando aplicável.

| Objeto | Conteúdo mínimo |
| --- | --- |
| Política do projeto | Meta base de margem regras por categoria e SKU alçadas exceções validade |
| Cadastro de produto | SKU variação anúncio canal unidade composição do kit e situação |
| Registro de custo | Valor unidade origem início de vigência inclusões e exclusões |
| Conjunto de dados | Período extração cobertura qualidade origem e versão |
| Diagnóstico | Problema evidência hipóteses impacto prioridades e limitações |
| Recomendação | Ação cenário atual cenário proposto premissas validade e bloqueios |
| Aprovação | Pessoa escopo valores limites prazo e versão aprovada |
| Execução | Valores anteriores comando resultado confirmação e possibilidade de reversão |
| Experimento | Hipótese comparação variável verba duração critérios e resultado |
| Alerta | Evento evidência gravidade escopo dono ação e estado |
| Regra oficial | Fonte trecho publicação vigência aplicabilidade e versão |
| Relatório | Período dados usados indicadores ajustes versão e validação |
| Aprendizado | Caso original revisão motivo escopo testes e procedimento atualizado |

### 15.2 Passagens de responsabilidade

Dados entrega um conjunto validado; Rentabilidade entrega limites e cálculos; Ads devolve cenários e plano de mídia; Estoque informa capacidade; Conta organiza diagnóstico; Criativos recebe briefing com produto e condições; Coordenador consolida a proposta; Revisão confere; Jean aprova; o responsável executa e devolve evidência. Educação incorpora o aprendizado somente após revisão.

Nenhum agente deve depender apenas de texto livre para valores de preço, orçamento, datas e identificadores. A redação pode explicar, mas os campos críticos devem ter valores estruturados e verificáveis. Uma tarefa concluída em uma área precisa indicar se a próxima já recebeu os dados ou se permanece bloqueada.

## 16 Rotinas integradas de operação

### 16.1 Entrada de uma nova conta

CONFIRMADO quanto ao uso de histórico e PROPOSTO quanto à sequência. Jean define responsável, objetivo e canais; Dados importa os três meses anteriores disponíveis; Conta constrói diagnóstico; Rentabilidade confere custos e impostos; Ads identifica histórico e limites; Estoque identifica riscos; Coordenador propõe o plano inicial. Lacunas essenciais são solicitadas antes de recomendar ações dependentes.

Se houver fechamento anterior, usar para comparar e explicar divergências, sem presumir que seu conceito de margem é igual ao do projeto. Sem fechamento, criar referência inicial a partir das plataformas, com lista de dados ausentes. Ausência de custo impede afirmar margem confiável; não impede relatar vendas e gasto de Ads com a limitação indicada.

### 16.2 Rotina diária

Coletar dados disponíveis; verificar integridade; detectar ruptura, falta de entrega publicitária, gasto anormal e ações sem confirmação; encaminhar alertas; analisar propostas; solicitar aprovação; executar e verificar o que foi autorizado. O horário e a frequência concreta de cada coleta dependem do canal e ainda serão definidos.

### 16.3 Rotina semanal

Atualizar indicadores, prioridades, estratégias, testes e bloqueios. Publicar no aplicativo um relatório objetivo com período, data dos dados, receita, investimento, contribuição quando calculável, principais desvios, ações realizadas, resultados parciais e decisões necessárias. O resumo para WhatsApp deve remeter ao relatório e destacar apenas o que merece atenção.

### 16.4 Rotina mensal

Consolidar pelo mês da venda; conciliar dados e custos conhecidos; fechar Ads; explicar margem e desvios; revisar ABC e estratégias; produzir plano de ação para gargalos críticos, indicações para os demais e próximos passos. Jean valida. A data limite de entrega e a regra de ajustes tardios ficam pendentes. Se uma fonte essencial estiver atrasada, entregar preliminar identificado e registrar a pendência.

### 16.5 Processo de estratégia com margem reduzida

Registrar objetivo e razão comercial; calcular impacto; definir preço médio e margem ponderada esperados; documentar limite de unidades, prazo e investimento; demonstrar plano de recuperação e cenário de fracasso; obter aprovação; executar; monitorar consumo dos limites; encerrar ou submeter replanejamento. Recuperação incerta exige comunicação explícita, sem encobrir a perda do período com projeções futuras.

## 17 Notificações incidentes e continuidade

### 17.1 Alertas prioritários

CONFIRMADO. Prioridades citadas por Jean: falta de estoque, falta de Ads e gasto de Ads extremamente elevado em um dia inesperado. PROPOSTO. Adicionar como alertas operacionais falha de coleta, custo essencial ausente, ação parcialmente executada e risco de ultrapassar limite aprovado. Esses alertas de controle devem ser separados dos alertas de desempenho comercial.

Cada alerta informa cliente, canal, produto ou campanha, horário, comparação esperada, evidência, impacto possível, recomendação, responsável e prazo de resposta quando definido. Limiares precisam considerar tamanho da conta, horário, calendário e quantidade de dados; não usar um valor único para todos os clientes.

### 17.2 WhatsApp e aplicativo

WhatsApp é desejado, mas não está conectado por este documento. PENDENTE: solução de integração, número remetente, destinatários, grupos, horários e conteúdo autorizado. PROPOSTO: aplicativo mantém o registro completo; WhatsApp envia resumo e link, com informações adequadas ao destinatário. Consolidar mensagens repetidas e enviar nova notificação quando houver mudança material, resolução ou necessidade de decisão.

Notificação enviada não equivale a aprovação. A forma de associar uma resposta de WhatsApp à versão exata de uma proposta precisa ser definida antes de permitir aprovações por esse canal. Falha de entrega deve ficar visível no aplicativo e acionar o responsável conforme política acordada.

### 17.3 Incidente e recuperação

PROPOSTO. Quando uma alteração exceder limites ou produzir estado inesperado, suspender a sequência dependente, confirmar o estado real e comunicar Jean. Se existir reversão previamente autorizada e aplicável, executá-la e verificar; caso contrário, apresentar opções e aguardar decisão. Cancelar uma campanha futura ou reverter preço pode ter consequências diferentes de desfazer o comando original, por isso o plano de recuperação deve ser específico.

## 18 Autonomia por etapas

### 18.1 Estágio inicial confirmado

Recomendação pelo agente, aprovação de Jean e execução pelo agente, com registro e conferência. Aprovação da equipe depende da alçada que Jean atribuir. Uma aprovação comercial só habilita execução se o sistema tiver acesso e capacidade técnica para a ação. Na ausência de integração, entregar instrução para execução humana e solicitar confirmação do estado final.

### 18.2 Evolução proposta

Estágio de validação histórica: conferir cálculos e relatórios com dados conhecidos, sem alterar contas. Estágio assistido: executar cada ação após aprovação específica. Estágio delimitado: operar ações recorrentes dentro de envelopes aprovados de cliente, canal, preço, verba e margem. Estágio ampliado: ampliar escopo após resultados e revisão de Jean. Nenhum estágio é liberado automaticamente pelo simples decurso do tempo.

Critérios a aprovar: quantidade e diversidade de casos, reconciliação dentro da tolerância, ausência de violações de escopo, qualidade de execução, resultados dos testes, capacidade de detectar problemas e reversão verificada. Metas, estratégias e resumos continuam visíveis mesmo com autonomia elevada.

### 18.3 Ações fora da autorização genérica

PROPOSTO. Exigem política específica: aumentar teto mensal, operar fora de faixas aprovadas, mudar custo ou imposto cadastrado, criar acesso, alterar destinatários, publicar em nova conta, comprar estoque, descartar mercadoria ou modificar uma regra global de clientes. A intenção futura de operação autônoma não concede essas permissões agora.

## 19 Catálogo proposto de habilidades executáveis

Cada habilidade precisa de entradas, procedimento verificável, saída, bloqueios e critério de aceitação. A tabela resume o catálogo; os processos detalhados estão nas seções dos responsáveis. Trata-se de desenho funcional, sem instalação de skills ou automações nesta etapa.

| Código | Habilidade e responsável | Saída e condição de aceitação |
| --- | --- | --- |
| CO01 | Planejar operação pelo Coordenador | Plano com prioridades donos e decisões |
| CO02 | Orquestrar aprovação e execução | Ação vinculada à aprovação e verificada |
| CO03 | Consolidar acompanhamento | Resumo consistente com relatórios especializados |
| PR01 | Validar custos e vigências | Custo rastreável ou bloqueio explícito |
| PR02 | Calcular preço por canal | Memória de cálculo e regra aplicável |
| PR03 | Custear kits e variações | Componentes corretos sem duplicidade |
| PR04 | Calcular limites de Ads | Equilíbrio e meta separados com bases explícitas |
| PR05 | Simular promoções e recuperação | Cenários com limites e plausibilidade |
| PR06 | Apurar margem mensal | Totais reconciliados e ajustes rastreáveis |
| PR07 | Explicar desvio de margem | Diferença ligada a dados e ação sugerida |
| AD01 | Planejar verba mensal | Cenários compatíveis com margem e estoque |
| AD02 | Detectar anomalias de Ads | Evidência comparada ao calendário e ritmo |
| AD03 | Executar ajuste autorizado | Estado final e limites conferidos |
| AD04 | Planejar e avaliar teste | Hipótese critérios e limitações explícitos |
| CT01 | Diagnosticar conta | Gargalos e hipóteses sustentados por dados |
| CT02 | Classificar catálogo | ABC reproduzível e produtos sem base separados |
| CT03 | Acompanhar plano comercial | Evolução e pendências com dono |
| CR01 | Preparar briefing | Produto objetivo e restrições confirmados |
| CR02 | Produzir e revisar materiais | Fidelidade e adequação ao canal |
| CR03 | Publicar conteúdo aprovado | Versão e objeto de destino verificados |
| ED01 | Registrar correção e aprendizado | Caso e justificativa preservados |
| ED02 | Atualizar procedimento | Versão revisada e testada |
| ES01 | Analisar cobertura e ruptura | Estoque e premissas identificados |
| ES02 | Triar devolução | Evidência decisão ou inspeção necessária |
| DA01 | Importar e conciliar dados | Origem cobertura e totais conferidos |
| DA02 | Mapear produtos e kits | Identificadores sem ambiguidades silenciosas |
| RG01 | Detectar mudança oficial | Fonte vigência e aplicabilidade documentadas |
| RG02 | Avaliar impacto de regra | Contas afetadas e ação proposta |
| QA01 | Revisar cálculos e política | Parecer com achados reproduzíveis |
| QA02 | Conferir execução e relatório | Correspondência entre aprovado e realizado |

## 20 Validação do piloto e critérios de aceite

### 20.1 Sequência proposta

Começar por uma conta própria a selecionar, preferencialmente no primeiro canal da prioridade se Jean confirmar. Importar os três meses anteriores ao início da gestão e utilizar o fechamento de outubro de 2026 como caso de conferência. Identificar quais custos e definições desse fechamento diferem do escopo vigente. Não ampliar para todos os canais antes de comprovar o fluxo principal.

Primeiro validar dados, custos e cálculos; depois relatórios e propostas; em seguida execução assistida e verificação. Só então testar ações recorrentes com limites. O calendário de entrega depende do acesso efetivo, volume de dados e decisões pendentes; este documento não estabelece prazo de desenvolvimento.

### 20.2 Casos de conferência obrigatórios propostos

| Caso | Comportamento esperado |
| --- | --- |
| Produto simples com custos conhecidos | Reproduzir contribuição e preço alvo |
| Kit com variações de componentes | Somar quantidades e custos vigentes corretos |
| Custo essencial ausente | Bloquear recomendação dependente e solicitar dado |
| Estimativa solicitada por Jean | Identificar cenário e impedir confusão com realizado |
| Mudança de tarifa por faixa | Recalcular regra e verificar preço resultante |
| Ads sem atribuição completa | Preservar total e parcela não atribuída |
| Devolução e ressarcimento tardios | Vincular evento e evitar dupla contagem |
| Campanha com margem comprimida | Exigir limites e plano de recuperação aprovado |
| Produto de alta receita e baixa contribuição | Mostrar diferença nas classificações |
| Produto sem estoque com Ads ativo | Gerar alerta sem alterar conta sem autorização |
| Gasto alto em campanha programada | Considerar contexto antes de classificar incidente |
| Gasto inesperado fora do plano | Gerar alerta e proposta com evidência |
| Aprovação antiga com custo alterado | Invalidar recomendação dependente |
| Resposta incerta ao executar | Conferir estado antes de repetir |
| Arquivo reimportado | Não duplicar vendas ou Ads |
| Imagem insuficiente de devolução | Solicitar inspeção e preservar decisão humana |
| Dados de outro cliente | Recusar associação e impedir uso cruzado |
| Regra oficial com vigência futura | Agendar impacto sem antecipar indevidamente |

### 20.3 Aceitação de cada entrega

Jean aprova o resultado mensal. A revisão deve confirmar origem dos dados, cobertura do período, custos incluídos, matemática, execução autorizada e clareza do relatório. Tolerâncias monetárias, cobertura mínima, volume de testes e limites de divergência serão estabelecidos antes de promover autonomia. Resultados positivos de negócio ajudam a avaliação, mas não compensam falha de controle ou cálculo.

## 21 Pendências para decisão de Jean

P01. Confirmar o significado de ausência de custos nas contas próprias. Até a resposta, não zerar custos da operação.

P02. Selecionar primeira conta, canal e responsável pelo fornecimento dos arquivos. Confirmar qual fechamento de outubro será a referência e sua base de cálculo.

P03. Escolher fonte central dos custos, campos obrigatórios, periodicidade de atualização e critério de vigência. Definir como tratar custo médio, custo de lote e reposição em cada cliente.

P04. Aprovar base de receita da margem, tratamento de frete e subsídios, impostos e regra de ajustes tardios. Diferenciar apuração mensal de gasto de Ads e atribuição publicitária.

P05. Confirmar orçamento mensal de Ads por cliente e canal, pessoas que aprovam e eventual reserva de teste. A menção a 10% deve permanecer ligada à margem, salvo orientação diferente.

P06. Definir alçadas da equipe, validade de aprovações e limites de preço, verba e margem por ação. Definir o tratamento de casos abaixo de 10% e intervalos entre as faixas mencionadas.

P07. Definir horizonte, limite de unidades/verba e critérios de encerramento de estratégias com margem comprimida. Aprovar como será medido preço médio e recuperação de contribuição.

P08. Confirmar metodologia ABC, cortes, janela, frequência e tratamento de sazonais e produtos novos. A proposta por contribuição total ainda depende de validação.

P09. Definir alertas de falta de Ads, limiares de estoque e gasto, horários e responsáveis. Escolher integração e destinatários de WhatsApp e se haverá aprovação por mensagem.

P10. Definir frequência de coleta, corte semanal, prazo do mensal e regra de reabertura. Não há agenda automática criada.

P11. Aprovar processo físico de inspeção e destinação das devoluções, incluindo quem atualiza estoque e quais ações exigem Jean.

P12. Definir mudanças de regras que exigem aprovação prévia e as que podem ser aplicadas após notificação com evidência. Listar fontes oficiais por canal.

P13. Aprovar critérios de expansão de autonomia, limites dos testes e critérios de interrupção. Autonomia total é objetivo futuro, não estado atual.

P14. Realizar entrevistas de detalhamento de Conta, Ads, Criativos, Educação e Coordenador. As descrições presentes permitem revisão, mas não substituem a validação de Jean nessas áreas.

P15. Escolher arquitetura técnica, armazenamento, conectores e modelo de execução após validar a modelagem. Definir acessos, separação por cliente, retenção e recuperação operacional na fase técnica.

## 22 Roteiro para revisão de Jean e Claude

### 22.1 Revisão de Jean

Conferir se cada decisão vigente representa a operação real; indicar qualquer custo ou atividade fora do contrato de gestão; confirmar quem pode aprovar; avaliar se os relatórios ajudam a agir; revisar regras por cliente e as perguntas pendentes. Marcar cada proposta como aprovada, aprovada com ajuste, rejeitada ou adiada. Uma aprovação de modelagem não equivale à aprovação de ações nas contas.

### 22.2 Revisão solicitada ao Claude

Revisar este documento como especificação funcional de uma operação de agentes de marketplace. Preservar as decisões confirmadas e separar correções necessárias de preferências de arquitetura. Conferir especialmente a meta de 15% após custos da venda e Ads e antes das despesas fixas; a base de receita; dupla contagem de descontos, Ads, devoluções e ressarcimentos; diferença entre competência da venda e atribuição de publicidade; custos e composição de kits; viabilidade de recuperação de margem; qualidade da ABC; limites das conclusões de testes; e rastreabilidade de aprovação e execução.

Identificar sobreposições ou lacunas entre os agentes e propor simplificações que preservem os controles. Não pressupor tarifas atuais, conectores prontos, acesso irrestrito ou treinamento automático de modelos. Avaliar se as responsabilidades de apoio podem começar como módulos determinísticos ou procedimentos, em vez de agentes independentes. Listar cenários de falha e decisões que bloqueiam a primeira implementação.

Entregar uma revisão com localização da seção, problema, impacto, correção sugerida e decisão que depende de Jean. Propor um MVP com ordem de construção e critérios de aceite. Não iniciar programação nem alterar contas durante a revisão.

### 22.3 Registro das revisões

Para cada achado, registrar identificador, seção, autor da revisão, descrição, gravidade, proposta, decisão de Jean e versão em que foi resolvido. Depois da revisão conjunta, consolidar uma versão única para evitar que orientações do chat, de Claude e de arquivos antigos coexistam como políticas conflitantes.

## 23 Referências e glossário

### 23.1 Referências do projeto

Conversa original recuperada: https://chatgpt.com/local/01a1a492-57c7-7259-8256-17bae1d21038. Decisões complementares e correção da meta de margem: conversa local de continuidade em 4 de novembro de 2026. Referência comercial inicial indicada por Jean: https://selleriaclub.com.br/. A referência serviu para iniciar a discussão das cinco frentes; não constitui descrição das capacidades internas do fornecedor nem fonte de tarifas nesta especificação.

### 23.2 Termos utilizados

Margem de contribuição após Ads: contribuição remanescente depois dos custos variáveis incluídos e do gasto de publicidade, dividida pela receita definida no escopo. Não inclui despesas fixas nesta versão.

Fechamento da gestão: relatório mensal das vendas, Ads e rentabilidade calculável no escopo informado, validado por Jean. Não equivale ao fechamento financeiro integral do cliente.

ABC: classificação por participação acumulada em uma métrica e janela definidas, acompanhada de suas limitações. Receita e contribuição produzem classificações distintas.

ROAS: receita atribuída à publicidade dividida pelo gasto correspondente, conforme definição e janela informadas pela fonte. Sua relação com margem exige bases comparáveis.

TACOS: gasto total de Ads dividido pela receita total comparável no mesmo escopo e período. Não substitui a contribuição.

SKU: identificador de produto ou variação na operação; pode exigir mapeamento entre ERP, anúncio e canal.

Referência inicial: conjunto de dados e resultados anteriores à gestão usado para comparação, com exclusões e lacunas documentadas.

Habilidade executável: procedimento com entradas, sequência, saída e critérios verificáveis, independentemente de ser executado por IA ou código.

Aprendizado validado: atualização revisada de memória, procedimento ou regra com escopo e evidência, sem presumir alteração automática do modelo de IA.

Autorização delimitada: permissão recorrente com escopo, valores, condições e validade, diferente de autonomia irrestrita.
