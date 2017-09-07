# FUNDAMENTAÇÃO TEÓRICA

O objetivo deste capítulo é apresentar uma visão geral de redes OTN, citando algumas das principais recomendações de padronização desta tecnologia, descrevendo sua arquitetura em camadas e citando os principais elementos que compõem esta rede, como o OTN switch, utilizado como objeto de virtualização nesta dissertação.

## REDES ÓPTICAS DE TRANSPORTE

O crescimento da demanda por banda, a necessidade da transmissão de dados a velocidades cada vez maiores e aplicações com grande volume de informações sensíveis a atrasos, foram alguns dos motivos que impulsionaram a pesquisa e desenvolvimento de uma rede mais veloz. As primeiras redes de transporte eram analógicas e utilizavam cabos coaxiais para transmissão.

!figure[Hierarquia OTN dividida em camadas][images/example-1-figure-1.png][(RAMASWAMI et al., 2010).]

A camada OCh e suas subcamadas são responsáveis pela criação e gerenciamento do quadro OTN, também fornece um caminho óptico para transportar o sinal cliente pela rede OTN, realizando conversão do sinal elétrico para óptico entre duas terminações ópticas. Na camada OPU são realizadas adaptações necessárias para o transporte do sinal cliente pela rede OTN. A camada ODU provê as funcionalidades de multiplexação TDM, proteção, supervisão fim-a-fim do caminho, TCM (Tandem Conection Monitoring), entre outras funcionalidades de monitoração da qualidade do sinal. A camada OMS é responsável por multiplexar/demultiplexar diversos comprimentos de onda, cada um transportando um canal óptico, em uma fibra. A camada OTS fornece um caminho óptico ponto-a-ponto entre dois elementos ópticos.

## testem

Propor uma arquitetura que permita definir os componentes indispensáveis para atender as necessidades de virtualização e fatiamento de redes OTNs e um framework que será proposto a partir da arquitetura, como prova de conceito para criação de diversas fatias de redes virtuais.

Propor uma arquitetura que permita definir os componentes indispensáveis para atender as necessidades de virtualização e fatiamento de redes OTNs e um framework que será proposto a partir da arquitetura, como prova de conceito para criação de diversas fatias de redes virtuais.
