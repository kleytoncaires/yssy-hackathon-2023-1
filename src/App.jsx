import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Box } from "@mui/material";
import { useState } from 'react';
import Logo from "/images/logos/logomarca_negativo.svg";

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": "Você é o Fredinho, um grande modelo de linguagem treinado pelo SOC da Yssy"+
  "Responda as perguntas da forma mais completa possível."
}

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Olá, eu sou o Fredinho! Como posso te ajudar?",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        {"role": "user", "content": "O que é a Yssy"},  // The system message DEFINES the logic of our chatGPT
        {"role": "assistant", "content": "A Yssy é a maior plataforma de tecnogia do Brasil"},
        {"role": "user", "content": "O que a Yssy faz?"},
        {"role": "assistant", "content": "A yssy possuí BUs de cibersegurança, Cloud Digital Application, Dados e Analytics, Desenvolvimento, Infraestrutura, Serviços gerenciados"},
        {"role": "user", "content": "Quais serviços a BU de Dados e Analytics oferece?"},
        {"role": "assistant", "content": "A BU de Dados e Analytics oferece serviços de BI, provendo integração de dados Unicação dos Dados e Dashboards"},
        {"role": "user", "content": "Quais serviços a BU de Dados e Analytics oferece?"},
        {"role": "assistant", "content": "A BU de Dados e Analytics oferece serviços de engenharia de dados, provendo Data Lake, Delta Lake House e Pipeline de dados"},
        {"role": "user", "content": "Quais serviços a BU de Dados e Analytics oferece?"},
        {"role": "assistant", "content": "A BU de Dados e Analytics oferece serviços de Governança de Dados, provendo Virtualização de dados, Gerenciamento de dados, catálogo de dados."},
        {"role": "user", "content": "Quais serviços a BU de Dados e Analytics oferece?"},
        {"role": "assistant", "content": "A BU de Dados e Analytics oferece serviços de Data Science, provendo Machine Learning, MLOps e AI."},
        {"role": "user", "content": "Quais serviços a BU de Serviços Gerenciados oferece?"},
        {"role": "assistant", "content": "A BU de Serviços Gerenciados oferece serviços de ESM(Enterprise Service Manager), provendo IT Business Management(ITBM), IT Services Management(ITSM),HR & Employee Delivery(HRSM), Customer Service Management(CSM), Field Service Management(FSM) e AppEngine/DevOps"},
        {"role": "user", "content": "Quais serviços a BU de Serviços Gerenciados oferece?"},
        {"role": "assistant", "content": "A BU de Serviços Gerenciados oferece serviços de GRC(Governance, Risk and Compliance) provendo Security Operations(SecOps), Risk Security(IRM), Vendor Management, Identity and Access (IDM/IGA/PAM), Process Mining / Task Mining / RPA, Workload / Task Automation(SOAP)"},
        {"role": "user", "content": "Quais serviços a BU de Serviços Gerenciados oferece?"},
        {"role": "assistant", "content": "A BU de Serviços Gerenciados oferece serviços de ITOM(Operations Manager) provendo Telemetria e Monitoração(AIOPS), Telecom and Networking(ETOM/NPM), IT Asset Management(ITAM), Sofware Asset Management(SAM), Hardware Asset Management(HAM), Unified Endpoint Management(UEM)"},
        {"role": "user", "content": "Quais serviços a BU de Desenvolviemnto de Aplicações oferece?"},
        {"role": "assistant", "content": "A BU de Desenvolvimento desenvolve sistemas para diferentes plataformas como Mobile, Web, Desktop e serviços"},
        {"role": "user", "content": "Quais serviços a BU de Desenvolviemnto de Aplicações oferece?"},
        {"role": "assistant", "content": "A BU de Desenvolvimento possui um produto desenvolvido conhecido como RPA e o Monitoramento de produtividade."},
        {"role": "user", "content": "Quais são os parceiros da yssy?"},
        {"role": "assistant", "content": "Os parceiros da yssy são AppDynamics, Cisco, Datadog, Exabeam, Imperva, ServiceNow, BMC, Entuity, HashiCorp, Lacework, Microsoft, Pure Storage, Quest, Solarwinds, Sophos, Splunk, Thales, TIBCO, VMWare, Zscaler, Aruba, Anomali, BigID, Cloudera, COMMVault, Alhua, Datarobot, DellTechnologies, Forcepoint, Fortinet, Furukawa, Gigamon, Harness, Hewlett Packard Enterprise, Logitech, McAfee, MicroStategy, Ngena, Nutani, SentinelOne, Sonicwall, Tenable, Veeam, Veracode, Zoom, ActiveNav, Agilis, Alcatel-Lucent, AlgoSec, Allot, Assa Abloy, AWS, Axis, Axur, Axxonsoft, Azion, BeyondTrust, BrasilSat, Ceragon, CleanCloud, CoffeeBean, Comtech, Databricks, Drixit, Edge-core, Exagrid, Fortra, Grafana, Hexagon, HIKVISION, Hispamar, ID Essentials, Intelsat, L5 Networks, Lenovo, LGPD Now, Micro Focus, Netskope, Nexans, NSfocus, Oracle, Park Place, PhishX, Picus, Poly, Positivo, PRTG Netowrk Monitor, Qlik, Radware, Rocket.chat, Salt, Snow, ST Engineering, Suse, Tidal, W3SAT, Zebra, Zerum"},
        {"role": "user", "content": "Quais os líderes da Yssy?"},
        {"role": "assistant", "content": "Frederico Samartini: Chief Executive Officer, Gabrielly Nagy Diretora, Financeira Bacharel em Ciências Contábeis, MBA em Auditoria, Controladoria e Perícia pela Faculdade de Telêmaco Borba, tem mais de 12 anos de sólida experiência tributária, tendo atuado em consultorias e empresas de grande porte. Alexandre Brito, Superintendente de Aplicações e Dados, Especializado em projetos de Desenvolvimento de Aplicações e de Business Intelligence, atuando em TI a mais de 18 anos sendo os últimos 12 focado em gestão de projetos e equipes técnicas. Certificado em gestão utilizando métodos ágeis, atuando sempre com foco no atendimento às necessidades de negócio dos clientes. Cláudia Sprackling, Diversidade e Sustentabilidade, Bacharel em Letras com pós-graduação em Tradução nos idiomas Português e Inglês pela Universidade de São Paulo, tem mais de 20 anos de experiência em empresas multinacionais nos setores de tecnologia e direito internacional. Na Yssy, é frente de diversidade, integração e sustentabilidade, liderando equipes e projetos voltados para o propósito da companhia. Diego Nobre, Chief Transformation Officer Analista de sistemas e redes de computadores, ITIL Expert V3 e especialista certificado nas soluções BMC Software. Mais de 15 anos de experiência trabalhando com Gestão de TI, Transformação Digital e Gestão de Operações de TI. Responsável por diversos cases de sucesso em projetos de ITSM por todo o país. Hiroshi Liberal Ferreira Kanegae, Superintendente Comercial | Regional Distrito Federal Engenheiro em Redes de Comunicação pela Universidade de Brasília, MBA em Governança em TI pela Fundação Universa. Mais de 17 anos atuando no setor de tecnologia como: Telecomunicações, Data Center, Redes Corporativas, Cyber Segurança, entre outros. Adilson Hideki, Líder de Business Intelligence (BI) e Analytics Arquiteto de Soluções que envolvam Dados como: Business Intelligence, Data Warehouse, Bancos de Dados, Tuning de Bancos de Dados (performance), ETL, Desenvolvimento de Aplicativos com Microsoft.Net, Java e Data Science Analytics com Python e R. MBA em Arquitetura de Bancos de Dados na FIAP. Trabalho desde 1999 como consultor principalmente nos seguintes setores: Financeiro, Telecom e Varejo. Douglas Koja, Líder Engenharia em Comunicação e Colaboração Formação em  Engenharia Eletrônica pela Escola de Engenharia Mauá, com pós graduação em Gestão de Projetos, mais de 15 anos de experiência ecom especialização em tecnologia de Redes e soluções de Comunicação Unificada e Colaboração. Edvan Trajano, Líder de Infraestrutura de Rede Lógica, Elétrica e Cabeamento Estruturado Formação em Engenharia Elétrica, atua com Infraestrutura de Rede Lógica, Elétrica e Cabeamento Estruturado a mais de 7 anos, com desenvolvimento de soluções e implantação de projetos de cabeamento metálico, back bone óptico e redes PON (Passive Optical Network), Roberto Martins, Consultor de Soluções em Business Intelligence (BI) e Analytics Especialista em soluções de software para negócio e Processamento de dados pela Univ. Presbiteriana Mackenzie, especialista em metodologia de software SEI (Software Engineering Institute) da Universidade Carnegie Mellon, com mais de 25 anos de atuação em Consultoria de desenvolvimento de sistemas e dados. Josiane Barros, CISO(Chief Information Security Officer)"},
        {"role": "user", "content": "A yssy possui profissionais qualificados?"},
        {"role": "assistant", "content": "Sim, a yssy possui a maior quantidade e prossionais qualificados e certificados do Brasil"},
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <div className="App">
      
      
      <Box sx={{p: 2, pb: 4, backgroundColor: '#4720cc'}}>
        <img alt="Yssy" src={Logo} style={{ width: "150px", margin: 'auto', display: 'block' }} />
      </Box>
      <Box sx={{position: 'relative', height: 'calc(100vh - 120px)'}}>
      <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT está digitando" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Digite a mensagem aqui" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
        </Box>
      
      
    </div>
  )
}

export default App
