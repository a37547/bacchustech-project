import React, { useContext } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import image1 from "../assets/images/report-img-1.png";
import { useEffect } from "react";
import { AppContext } from "../context/appContext";

// Create styles
const coverStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#404040",
  },
  header: {
    backgroundColor: "#008890",
    minHeight: "10%",
    height: "10%",
    maxHeight: "10%",
    padding: "25px",
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "700",
  },
  imageContainer: {
    minHeight: "45%",
    height: "45%",
    maxHeight: "45%",
    backgroundColor: "#404040",
  },
  image: {
    height: "100%",
    maxHeight: "100%",
    minHeight: "100%",
  },
  titleSection: {
    padding: "25px",
    backgroundColor: "#404040",
    minHeight: "45%",
    height: "45%",
    maxHeight: "45%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1.3",
  },
  titleHeaderOne: {
    fontSize: "36px",
    color: "white",
    fontWeight: "bold",
  },
  titleHeaderTwo: {
    fontSize: "36px",
    color: "white",
    fontWeight: "bold",
  },
  company: {
    fontSize: "20px",
    color: "white",
    marginTop: "10px",
  },
});

const grapesStyles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: "40px 25px",
  },
  headerContainer: {
    height: "5%",
    color: "#7f7f7f",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "28px",
    marginBottom: "10px",
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    color: "#008890",
    fontSize: "36px",
    marginBottom: "30px",
  },
  titleContainer: {
    height: "5%",
    color: "#008890",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "28px",
    marginBottom: "5px",
  },
  titleContainer2: {
    height: "5%",
    color: "#008890",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "28px",
    marginBottom: "5px",
    marginTop: "50px",
  },
  text: {
    fontSize: "14px",
    textAlign: "justify",
    lineHeight: "1.3",
    marginTop: "15px",
  },
  text2: {
    fontSize: "14px",
    textAlign: "justify",
    lineHeight: "1.3",
    marginTop: "50px",
  },
  imageContainer: {
    height: "225px",
    maxHeight: "225px",
    width: "90%",
    maxWidth: "90%",
    marginTop: "50px",
    display: "flex",
    alignSelf: "center",
  },
  residualWatersImageContainer: {
    height: "700px",
    maxHeight: "700px",
    width: "90%",
    maxWidth: "90%",
    display: "flex",
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  spanNumber: {
    fontSize: "20px",
    color: "#008890",
    fontWeight: "bold",
  },
});

// Create Document Component
const ReportDocument = ({ data }) => {
  useEffect(() => {}, []);
  return (
    <Document>
      <Page size="A4" style={coverStyles.page}>
        <View style={coverStyles.header}>
          <Text>2022 | BacchusTech</Text>
        </View>
        <View style={coverStyles.imageContainer}>
          <Image style={coverStyles.image} src={image1} />
        </View>
        <View style={coverStyles.titleSection}>
          <Text style={coverStyles.titleHeaderOne}>
            Relatório de Indicadores
          </Text>
          <Text style={coverStyles.titleHeaderTwo}>
            de Desempenho Ambiental
          </Text>
          <Text style={coverStyles.company}>Empresa 1</Text>
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View style={grapesStyles.titleSection}>
          <Text>Relatório de Indicadores</Text>
          <Text>de Desempenho Ambiental</Text>
        </View>
        <View style={grapesStyles.headerContainer}>
          <Text>Indicadores de produção</Text>
        </View>
        <View style={grapesStyles.titleContainer}>
          <Text>Uvas</Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            A proporção de uvas produzidas e compradas é um indicador da
            capacidade da empresa de prover a si mesma o principal insumo da
            produção do vinho. Uma empresa mais próxima da autossuficiência
            deste recurso consegue reduzir as suas pegadas ecológicas,
            principalmente a pegada de carbono, através da redução significativa
            de emissões de GEE provenientes da combustão móvel dos veículos
            utilizados no transporte das uvas das vinhas para as adegas.{" "}
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.producedAndBoughtGrapesGraph}
          />
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View style={grapesStyles.titleContainer}>
          <Text>Mosto</Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            Um importante indicador é o rendimento médio na transformação da uva
            em mosto. O rendimento da sua empresa foi de 0,73 L de mosto / kg de
            uva. De maneira similar à apresentada no tópico das uvas, uma
            empresa capaz de produzir o próprio mosto a partir das uvas consegue
            reduzir as suas pegadas ecológicas, principalmente a pegada de
            carbono, através da redução significativa de emissões de GEE
            provenientes da combustão móvel dos veículos utilizados no
            transporte do mosto até suas adegas.
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.producedAndBoughtMustGraph}
          />
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.mustFromProducedGrapesGraph}
          />
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View style={grapesStyles.titleContainer}>
          <Text>Vinho</Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            Outro importante indicador é o rendimento médio na transformação da
            uva em vinho. Diferentemente do rendimento em relação ao mosto,
            calcula-se o rendimento da uva em relação à unidade funcional de uma
            garrafa de vinho (0,75 L de vinho). O rendimento dos insumos da uva
            da sua empresa foi de 1,08 Kg de uva / garrafa de vinho. Um
            importante indicador neste caso é a proporção de cada tipo de
            produto comercializado por total de vinho produzido.
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.totalWineProportionsByTypeGraph}
          />
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View style={grapesStyles.headerContainer}>
          <Text>Indicadores de materiais</Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            É imprescindível para uma empresa que caminha rumo a uma economia
            cada vez mais circular inserir materiais reutilizados e reciclados
            como parte dos materiais utilizados na preparação e produção das
            embalagens de vinho.
          </Text>
          <Text style={grapesStyles.text}>
            Cerca de <Text style={grapesStyles.spanNumber}>35</Text>% da massa
            total dos materiais utilizados no engarrafamento dos produtos da sua
            empresa provém de material reciclado ou reutilizado. Vidro, plástico
            PET, rolhas, papel e cartão são os tipos de materiais que compõem
            esses <Text style={grapesStyles.spanNumber}>35</Text>%, como mostra
            o Gráfico 4 que também apresenta suas respectivas proporções
            considerando o total reciclado ou reutilizado.
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.totalWineProportionsByTypeGraph}
          />
        </View>
        <View>
          <Text style={grapesStyles.text2}>
            É igualmente importante o papel da empresa na informação ao
            consumidor das iniciativas sustentáveis, bem como a conscientização
            do consumidor em relação à destinação dos resíduos gerados. Contudo,
            tal informação não é transmitida ao consumidor no rótulo das
            embalagens. Também não há instruções nas embalagens acerca da
            disposição ambientalmente adequada dos materiais após ao uso.
          </Text>
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View style={grapesStyles.headerContainer}>
          <Text>Indicadores de águas</Text>
        </View>
        <View style={grapesStyles.titleContainer}>
          <Text>Consumo de água</Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            É importante contar e registar o volume de água gasto pela empresa.
            É recomendável que este controle seja feito para cada fonte
            proveniente. O gráfico a seguir apresenta o percentual de consumo de
            água proveniente da rede, captada de poço e captada de cisterna.
            Cerca de{" "}
            <Text style={grapesStyles.spanNumber}>
              {data.reusedWaterPercentage}
            </Text>
            % do volume total de água utilizada é reutilizada no processo de
            produção. A eficiência do uso da água no seu processo de produção
            foi cerca de <Text style={grapesStyles.spanNumber}>10</Text>L de
            água / unidade funcional (0,75 L de vinho).
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.waterConsumptionBySourceGraph}
          />
        </View>
        <View style={grapesStyles.titleContainer2}>
          <Text>Geração de águas residuais</Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            Para garantia da manutenção da higiene adequada no processo
            produtivo do vinho, a geração de águas residuais nas adegas está
            relacionada à higienização e/ou desinfeção de equipamentos,
            instalações e materiais. Desse modo, é imprescindível que a empresa
            consiga identificar quais são os processos que mais demandam água
            para que seja possível otimizar o uso deste recurso natural. Os
            gráficos a seguir apresentam os processos mais relevantes em relação
            à geração de águas residuais, considerando separadamente a
            vinificação e o engarrafamento.
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.waterConsumptionByWinemakingProcessImage}
          />
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.waterConsumptionByBottlingProcessImage}
          />
        </View>
        <View>
          <Text style={grapesStyles.text2}>
            Na vinificação destacou-se o processo de{" "}
            <Text style={grapesStyles.spanNumber}>filtração</Text>, sendo este
            responsável pela geração de{" "}
            <Text style={grapesStyles.spanNumber}>50</Text>% do volume total
            gerado nessa etapa. Por outro lado, no engarrafamento detacou-se o
            processo de{" "}
            <Text style={grapesStyles.spanNumber}>
              esterilização das garrafas
            </Text>
            , sendo este responsável pela geração de{" "}
            <Text style={grapesStyles.spanNumber}>43</Text>% do volume total
            gerado nessa etapa. O gráfico a seguir apresenta uma avaliação do
            sistema produtivo da adega como um todo, considerando ambas as
            etapas da produção.
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.waterConsumptionByProcessImage}
          />
        </View>
        <View>
          <Text style={grapesStyles.text2}>
            Na avaliação do sistema produtivo como um todo os processos de
            <Text style={grapesStyles.spanNumber}>
              esterilização das garrafas
            </Text>{" "}
            e de <Text style={grapesStyles.spanNumber}>filtração</Text>{" "}
            representam, respectivamente,{" "}
            <Text style={grapesStyles.spanNumber}>42</Text>% e{" "}
            <Text style={grapesStyles.spanNumber}>50</Text>% do volume total de
            águas residuais gerados na sua empresa.
          </Text>
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View style={grapesStyles.titleContainer}>
          <Text>Tratamento de águas residuais</Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            As águas residuais representam grande parte dos resíduos gerados na
            adega. Por esse motivo, é importante avaliar parâmetros
            quantitativos das águas residuais geradas, antes e depois do seu
            respetivo tratamento. Desse modo é possível caracterizar o efluente
            e garantir que o mesmo cumpre os requisitos legais. O gráfico a
            seguir apresenta o percentual de redução de parâmetros que direta ou
            indiretamente causam poluição das águas.
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.pollutantRemovalPercentageImage}
          />
        </View>
        <View>
          <Text style={grapesStyles.text}>
            Apesar de o processo de tratamento ter sido capaz de reduzir
            consideravelmente a maioria dos parâmetros analisados, isso por si
            só não garante que o tratamento foi satisfatório. Para tanto, é
            preciso considerar os requisitos exigidos legalmente apresentados no
            Decreto-Lei nº236/98, o qual estabelece normas, critérios e
            objetivos de qualidade com a finalidade de proteger o meio aquático
            e melhorar a qualidade das águas em função dos seus principais usos.
          </Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            A tabela a seguir mostra quais parâmetros cumprem ou não cumprem os
            requisitos, considerando os valores médios do último ano, tanto em
            época alta quanto baixa, para descarga das águas tratadas em corpos
            hídricos ou a sua utilização para uso em rega. Os resultados
            demonstram que o tratamento das águas residuais geradas pela sua
            empresa torna esse efluente tratado apto para uso em rega e inapto
            para descarga em quaisquer corpos hídricos.
          </Text>
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View style={grapesStyles.residualWatersImageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.residualWatersTableImage}
          />
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View style={grapesStyles.headerContainer}>
          <Text>Indicadores de energia</Text>
        </View>
        <View style={grapesStyles.titleContainer}>
          <Text>Consumo de eletricidade</Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            É importante contar e registar a energia elétrica consumida pela
            empresa. É recomendável que se tenha ciência da origem da
            <Text style={grapesStyles.spanNumber}>eletricidade comprada</Text>,
            seja de fonte renovável ou não renovável. O gráfico a seguir
            apresenta o percentual de cada tipo de fonte. Cerca de{" "}
            <Text style={grapesStyles.spanNumber}>35</Text>% da energia é
            proveniente do gás natural, uma{" "}
            <Text style={grapesStyles.spanNumber}>fonte não renovável</Text>. De
            entre as fontes renováveis, detaca-se a energia eólica, com cerca de
            <Text style={grapesStyles.spanNumber}>25</Text>% da energia elétrica
            adquirida. Pouco mais da metade de toda energia comprada e consumida
            pela sua empresa provém de{" "}
            <Text style={grapesStyles.spanNumber}>fontes renováveis</Text>{" "}
            (cerca de <Text style={grapesStyles.spanNumber}>53</Text>%).
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.electricityBySourceImage}
          />
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View>
          <Text style={grapesStyles.text}>
            Também é importante contar e registar a energia elétrica produzida
            pela empresa. O gráfico a seguir apresenta o percentual de cada tipo
            de fonte.
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.electricityProducedBySourceImage}
          />
        </View>
        <View>
          <Text style={grapesStyles.text2}>
            A sua empresa produz cerca de 21% do total da energia elétrica
            consumida no período avaliado, e cerca de 62% do total da energia
            elétrica consumida é proveniente de fontes renováveis. O consumo
            específico de energia elétrica no seu processo de produção foi cerca
            de 7 KWh / unidade funcional (0,75 L de vinho).
          </Text>
        </View>
      </Page>
      <Page size="A4" style={grapesStyles.page}>
        <View style={grapesStyles.titleContainer}>
          <Text>Combustíveis utilizados nas instalações da empresa</Text>
        </View>
        <View>
          <Text style={grapesStyles.text}>
            O gasto de energia, em kilowatt hora (kWh), foi estimado
            considerando o consumo de combustíveis líquidos, gasosos e sólidos
            por máquinas e equipamentos da empresa. Constatou-se que o gasóleo
            puro e os pellets correspondem a cerca de 48% da energia consumida
            através dos combustíveis utilizados. O gráfico a seguir apresenta o
            detalhamento do percentual.
          </Text>
        </View>
        <View style={grapesStyles.imageContainer}>
          <Image
            style={grapesStyles.image}
            src={data.electricityConsumedInCompanyInstalationsImage}
          />
        </View>
      </Page>
    </Document>
  );
};

export default ReportDocument;

/*


       */
