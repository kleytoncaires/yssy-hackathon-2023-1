import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { Box } from "@mui/material";
import { useState } from 'react';
import './styles.css';
import Logo from "/images/logos/logomarca_negativo.svg";

const API_KEY = "";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = {//  Explain things like you're talking to a software professional with 5 years of experience.
"role": "system", "content": "Você é o Fred, um grande modelo de linguagem treinado pelo SOC da Yssy, você irá responder apenas perguntas sobre yssy e seus serviços. Sempre que as informações sobre um produto for fornecido, apontar os principais produtos dos parceiros da Yssy deste produto e indicar um contato com o telefone comercial da Yssy (11)4134-8000"}
  

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Olá, eu sou o Fred! Como posso te ajudar?",
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
        {"role": "assistant", "content": "A Yssy é a maior plataforma de tecnologia do Brasil, onde atua no modelo B2B, ofereçendo uma alta diversidade de serviços de tecnologia"},
        {"role": "user", "content": "Quais são as Business Units (BUs) da Yssy?"},
        {"role": "assistant", "content": "A Yssy possuí BUs de cybersegurança, Cloud Digital Application, Dados e Analytics, Desenvolvimento, Infraestrutura, Serviços gerenciados"},
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
        {"role": "user", "content": "A yssy possui profissionais qualificados?"},
        {"role": "assistant", "content": "Sim, a yssy possui a maior quantidade e prossionais qualificados e certificados do Brasil"},
        {"role": "user", "content": "Quais os líderes da Yssy?"},
        {"role": "user", "content": "Quem são os líderes da Yssy?"},
        {"role": "assistant", "content": "Frederico Samartini - Chief Executive Officer,Gabrielly Nagy - Diretora Financeira, Alexandre Brito - Superintendente de Aplicações e Dados, Josiane Barros - Chief Information Security Officer, Cláudia Sprackling - Diversidade e Sustentabilidade, Diego Nobre - Chief Transformation Officer,'Hiroshi Liberal Ferreira Kanegae - Superintendente Comercial | Regional Distrito Federal, Adilson Hideki - Líder de Business Intelligence (BI) e Analytics,Douglas Koja - Líder Engenharia em Comunicação e Colaboração, Edvan Trajano - Líder de Infraestrutura de Rede Lógica, Elétrica e Cabeamento Estruturado, Roberto Martins - Consultor de Soluções em Business Intelligence (BI) e Analytics, Antonio Buzatto - Líder Telecomunicações"},
        {"role": "user", "content": "Onde a yssy está localizada?"},
        {"role": "assistant", "content": "A Matriz da yssy se encontra em Alphaville, na cidade de Barueri no estado de São Paulo, na alameda rio negro 500, torre b anda  r 21. Também possui um escritório no Ágora Tech Park em Joinville"},
        {"role": "user", "content": "A yssy é um bom lugar para se trabalhar?"},
        {"role": "assistant", "content": "A Yssy é um excelente lugar para se trabalhar, possue a o selo Great Place To Work(GPTW), dado às empresas pelo reconhecimento na qualidade do ambiente empresarial"},
        {"role": "user", "content": "Quais serviços a BU de Cybersegurança e Privacidade de dados oferece?"},
        {"role": "assistant", "content": "A BU de Cybersegurança e Privacidade de dados oferece serviços e produtos variados, como Pentest, Gestão de Vulnerabilidades, Suporte, Manutenção e Monitoramento de Soluções de cybersegurança, Avaliação e Assessment do cenário atual do client(Cyber Diagnosis), Serviços de SOC(Security Operations Center), Monitoramento e Resposta a incidentes, produtos de AppSec como SAST(Análise estática do código), DAST(Análise dinâmica do código, SCA, WAF(Web Application Firewall, CDN(Content delivery network), consultoria, Threat intelligence, Segurança em nuvem, Criptografia e dados, Endpoint security(XDR,EDR,NDR),Firewall, IPS,Network Security,DNS Security, MFA, Gestão de acesso e identidade(IAM), Data discovery, Cloud Security Posture Management(CSPM), Cloud Workload Protection Platform(CWPP), Proteção de vazamento de dados(DLP), Serviços anti fraudes digitais."},
        {"role": "user", "content": "Quais certificações a Yssy possue?"},
        {"role": "assistant", "content": "A yssy é certificada pelas normas interncionais ISO9000, ISO14000, ISO20000, ISO27001, ISO27701 e IS037000, além de ser uma empresa Selo B"},
        {"role": "user", "content": "Quantos funcionários a yssy possue?"},
        {"role": "assistant", "content": "A yssy possue mais de 200 funcionários altamente capacitados em diversas áreas."},
        

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
              typingIndicator={isTyping ? <TypingIndicator content="Fred está digitando" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput attachButton={false} placeholder="Digite a mensagem aqui" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
        </Box>
      
      
    </div>
  )
}

export default App
