# Introdução

As redes de computadores são formadas por várias redes diferentes interconectadas, compostas por inúmeros dispositivos de diferentes fabricantes, através de protocolos padronizados. Como resultado estão se tornando extremamente complexas. Os operadores de rede são responsáveis por configurar as políticas que respondem aos eventos e aplicações de rede, toda essa configuração é feita manualmente. Roteadores e Comutadores possuem interfaces de gerenciamento que permitem ao operador a configuração e gerência desses equipamentos, por exemplo, interfaces de linha de comando, XML/NETCONF ou Protocolo Simples de Gerência de Rede (SNMP). Assim o operador poderia ter acesso as capacidades dos equipamentos, porém, os níveis mais baixos de detalhes ainda eram escondidos do operador. Além de dificultar o gerenciamento da rede, sua otimização e customização, essa diversidade de equipamentos de fabricantes distintos impedia o desenvolvimento de inovações, pois torna quase impossível que pesquisadores testem e programem novas tecnologias. (NADEAU; GRAY, 2013) (JI, 2012).

As Redes Definidas por Software (SDN) fornecem uma abordagem para solucionar esses problemas. SDN é basicamente uma abordagem arquitetural que aperfeiçoa e simplifica as operações da rede por criar um vínculo maior entre as aplicações, serviços de rede e dispositivos (reais ou virtualizados). Nessa abordagem um dispositivo de rede é constituído por um plano de dados, que é muitas vezes uma matriz de comutação que liga as várias portas de um dispositivo, e um plano de controle que é o cérebro do dispositivo. Este cérebro iria enviar comandos para cada dispositivo, comandando-o, assim, a manipular sua comutação e roteamento de hardware físico.

As redes de transporte ópticas já possuem um controle centralizado, porém muitas tarefas de reconfiguração da rede ainda requerem operação manual. Com a evolução das redes ópticas, de um modelo estático para um mais configurável e dinâmico, vários desafios são apresentados para o plano de controle, como equalização óptica, roteamento e alocação de espectro, virtualização de serviços e outros. Os possíveis benefícios de SDN para OTN incluem simplificação da rede, virtualização das capacidades da rede, automação das operações da rede através de interfaces programáveis e implantação de novos serviços. O paradigma atual das redes de transporte já emprega um controle centralizado, auxiliado por funcionalidades distribuídas do GMPLS, como descobrimento da rede, atualização do estado da rede e outros. Assim, o desenvolvimento das Redes Ópticas Definidas por Software (SDON) deve considerar estratégias de migração e a melhor localização para implementação dessas funções (SIQUEIRA et al., 17 2013).

## OBJETIVOS

### Objetivo Geral

Propor uma arquitetura que permita definir os componentes indispensáveis para atender as necessidades de virtualização e fatiamento de redes OTNs e um framework que será proposto a partir da arquitetura, como prova de conceito para criação de diversas fatias de redes virtuais.

### Objetivos Específicos

- estudar redes ópticas para entender quais informações podem ser utilizadas na virtualização;
- definir o nível de granularidade da abstração dos elementos ópticos utilizados na construção da topologia da rede virtualizada;
- estudar o controlador OpenDaylight e seu módulo de virtualização para redes ethernet;
- estudar o módulo do OpenDaylight responsável pelo gerenciamento da topologia da rede;
- criar um módulo para fatiamento de redes ópticas;
- criar uma aplicação que solicite o fatiamento da rede.

# FUNDAMENTAÇÃO TEÓRICA

O objetivo deste capítulo é apresentar uma visão geral de redes OTN, citando algumas das principais recomendações de padronização desta tecnologia, descrevendo sua arquitetura em camadas e citando os principais elementos que compõem esta rede, como o OTN switch, utilizado como objeto de virtualização nesta dissertação.

## REDES ÓPTICAS DE TRANSPORTE

O crescimento da demanda por banda, a necessidade da transmissão de dados a velocidades cada vez maiores e aplicações com grande volume de informações sensíveis a atrasos, foram alguns dos motivos que impulsionaram a pesquisa e desenvolvimento de uma rede mais veloz. As primeiras redes de transporte eram analógicas e utilizavam cabos coaxiais para transmissão.

!figure[Hierarquia OTN dividida em camadas][images/example-1-figure-1.png][(RAMASWAMI et al., 2010).]

A camada OCh e suas subcamadas são responsáveis pela criação e gerenciamento do quadro OTN, também fornece um caminho óptico para transportar o sinal cliente pela rede OTN, realizando conversão do sinal elétrico para óptico entre duas terminações ópticas. Na camada OPU são realizadas adaptações necessárias para o transporte do sinal cliente pela rede OTN. A camada ODU provê as funcionalidades de multiplexação TDM, proteção, supervisão fim-a-fim do caminho, TCM (Tandem Conection Monitoring), entre outras funcionalidades de monitoração da qualidade do sinal. A camada OMS é responsável por multiplexar/demultiplexar diversos comprimentos de onda, cada um transportando um canal óptico, em uma fibra. A camada OTS fornece um caminho óptico ponto-a-ponto entre dois elementos ópticos.

## testem

Propor uma arquitetura que permita definir os componentes indispensáveis para atender as necessidades de virtualização e fatiamento de redes OTNs e um framework que será proposto a partir da arquitetura, como prova de conceito para criação de diversas fatias de redes virtuais.

<div class="floating">
    <p class="caption">Figura 2 - Produção anual das dissertações de mestrado e teses de doutorado entre os anos de 1990 e 2008</p>
    <center>
    <div class="table" style="width: 400px">
        <table width="400px" >
            <thead>
                <tr>
                    <th>Well #</th>
                    <th>Velocity: BD tests</th>
                    <th>Hydraulic</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>b2</td>
                    <td>0.054 ft/d</td>
                    <td>1.1 x 10-2 ft/d</td>
                </tr>
                <tr>
                    <td>B3</td>
                    <td>0.32 ft/d</td>
                    <td>0.07 ft/d</td>
                </tr>
                <tr>
                    <td>B4</td>
                    <td>0.06 ft/d</td>
                    <td>1.2 x 10-2 ft/d</td>
                </tr>
            <tbody>
        </table>
        <p class="font">Fonte: Elaborado pelo autor.<p>
        <p class="note">Nota: Hoje, como ontem, as posições de Freire (1996, p. 59) com respeito à busca de novas práticas educativas ganham força e nos levam a refletir:<p>
    </div>
    </center>
</div>


# EDUCAÇÃO CONTEMPORÂNEA NA SOCIEDADE BRASILEIRA

## CONTEXTUALIZANDO A EDUCAÇÃO

Vários são os exemplos de contextualização da educação, de escolas que buscam na sua realidade idealização de projetos, que englobam aspectos sociais vividos por seus alunos (GRISPINO, 2005).

### Educação de jovens e adultos

A educação de jovens e adultos (EJA) é a modalidade de ensino nas etapas dos ensinos fundamental e médio da rede escolar pública brasileira e adotada por algumas redes particulares que recebe os jovens e adultos que não completaram os anos da educação básica em idade apropriada por qualquer motivo.

#### A visão do educador de jovens e adultos

A profissionalização do educador de EJA tem se tornado cada vez mais nuclear, tanto nas práticas educativas quanto nos fóruns de debate. Com base na ação do voluntariado, a primeira Campanha Nacional de Educação de Adultos no Brasil, lançada em 1947, passou a ser sistematicamente criticada por não preparar adequadamente professores para trabalhar com essa população (SOARES, 2008).

##### A prática educativa na EJA

Hoje, como ontem, as posições de Freire (1996, p. 59) com respeito à busca de novas práticas educativas ganham força e nos levam a refletir:

<div class="citacao-longa">
A aquisição do sistema escrito é um processo histórico, tanto a nível ontogenético, como a nível filogenético. O sistema escrito é produzido historicamente pela humanidade e utilizado de acordo com interesses políticos de classe. O sistema escrito não é um valor neutro
</div>
