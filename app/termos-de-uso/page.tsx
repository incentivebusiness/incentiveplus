import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col justify-center items-center text-[rgb(1,24,74)] py-20 px-10 md:px-20'>
                <div className='max-w-4xl'>
                    <h1 className='text-2xl md:text-3xl xl:text-4xl text-[rgb(1,24,74)] font-bold text-center mb-6'>Termos de uso</h1>

                    <p>O Banco Digital, referido como “INCENTIVE PLUS CRED”, tem como objetivo contribuir para a realização de sonhos e o investimento em grandes ideias por parte de pessoas e empresas. Todo esse processo é conduzido de maneira transparente, ética e responsável. Apresentamos, portanto, nossos Termos de Uso e Política de Privacidade para garantir que nossos usuários e titulares de dados pessoais compreendam facilmente as condições de uso do nosso site e aplicativo, bem como a forma como coletamos e utilizamos suas informações nas atividades realizadas.</p>

                    <p>Caso surjam dúvidas, estamos disponíveis para contato através de nossos canais de atendimento.</p>

                    <h2 className='text-xl font-bold mt-6 mb-2'>Termos de Uso</h2>

                    <p>Estes Termos de Uso aplicam-se a todos os sites e aplicativos do Banco Digital, assim como a todos que acessam essas plataformas. Ao utilizar nossos sites e aplicativos, você expressamente aceita e concorda com as disposições destes Termos de Uso.</p>

                    <p>Portanto, recomendamos a leitura cuidadosa destes Termos de Uso antes de utilizar nossos sites e aplicativos. Caso não concorde com os Termos de Uso, pedimos que evite o uso de nossas plataformas.</p>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Atualização dos Termos de Uso</h3>

                    <p>Ressaltamos que os Termos de Uso, bem como os conteúdos e funcionalidades de nossos canais, podem ser atualizados a qualquer momento por motivos legais, adoção de novas tecnologias e funcionalidades, ou quando julgarmos alterações como necessárias. Ao continuar acessando nossos sites e aplicativos após as modificações, publicadas nas respectivas plataformas, você concorda com as alterações propostas.</p>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Termos e Condições de Uso Específicos</h3>

                    <p>Além destes Termos de Uso e da Política de Privacidade, alguns sites e aplicativos podem apresentar serviços, funcionalidades e termos próprios ou adicionais para sua utilização. Nestes casos, os termos adicionais estarão disponíveis nas respectivas plataformas e serão aplicáveis ao uso desses serviços e funcionalidades.</p>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Acesso a Conteúdo Restrito</h3>

                    <p>Determinados sites e aplicativos possuem áreas com conteúdo aberto e restrito. Para acessar o conteúdo restrito, pode ser necessário realizar um cadastro, fornecendo informações pessoais para a criação de um login e senha. É importante verificar se as informações fornecidas estão corretas, pois a veracidade delas é de responsabilidade do usuário. Inconsistências podem impactar o acesso ao site ou aplicativo.</p>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Conteúdos Enviados por Usuários</h3>

                    <p>Alguns de nossos sites e aplicativos possibilitam que usuários enviem conteúdos como comentários, imagens, mensagens, fotos, etc., para divulgação em áreas de conteúdo aberto. Os conteúdos enviados podem ser visualizados por outros usuários, respeitando sempre as normas de sigilo bancário. Também é possível enviar conteúdo para fins de cadastro, atendimento ou uso de serviços, sendo a responsabilidade pelo conteúdo enviada atribuída ao remetente.</p>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Links para Sites e Aplicativos de Terceiros</h3>

                    <p>Nossos sites e aplicativos podem conter links para sites e aplicativos de terceiros. É importante observar que ao acessar esses sites e aplicativos, você estará sujeito a outros termos de uso e políticas de privacidade. Nossos Termos de Uso e Política de Privacidade não se aplicam a sites e aplicativos de terceiros. A existência de links não implica em endosso ou patrocínio entre o Banco Digital e esses terceiros, sendo que não assumimos qualquer responsabilidade em relação a eles.</p>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Uso Inadequado de Nossos Sites e Aplicativos</h3>

                    <p>Esteja ciente das práticas que violam nossas condições de uso:</p>

                    <ul>
                        <li>Realizar atos ilícitos, infringir os direitos do Banco Digital ou de terceiros, e violar a legislação vigente;</li>
                        <li>Realizar upload, envio ou transmissão de conteúdo erótico, pornográfico, obsceno, calunioso, difamatório, violento, com apologia ao crime, uso de drogas, consumo de bebidas alcoólicas ou produtos para fumo, bem como promover ou incitar o ódio, atividades ilegais, preconceito ou qualquer forma de discriminação;</li>
                        <li>Utilizar sistemas ou aplicações automatizadas para consultas, acessos ou operações massificadas, sem nossa expressa autorização formal;</li>
                        <li>Praticar atos prejudiciais a qualquer Site, aplicativo ou equipamento, seja nosso, de outros usuários ou terceiros, incluindo vírus, trojans, malware, worm, bot, backdoor, spyware, rootkit ou qualquer outro meio com esse propósito.</li>
                    </ul>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Responsabilidades</h3>

                    <p>Você, como usuário, é responsável por:</p>

                    <ul>
                        <li>Todas as suas ações ou omissões em nossos Sites e Aplicativos;</li>
                        <li>Conteúdos enviados e/ou transmitidos nos Sites e Aplicativos por você;</li>
                        <li>Reparação de danos causados ao Banco Digital, terceiros ou outros usuários, decorrentes do seu acesso e uso dos nossos Sites e Aplicativos.</li>
                    </ul>

                    <p>Não nos responsabilizamos por itens mencionados acima, bem como por indisponibilidades e falhas técnicas do sistema dos Sites e Aplicativos. Conteúdos enviados e/ou transmitidos por usuários e/ou terceiros não refletem a opinião ou visão do Banco Digital.</p>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Propriedade Intelectual</h3>

                    <p>Os seguintes itens pertencem ao Banco Digital e só podem ser usados com sua prévia e expressa autorização:</p>

                    <ul>
                        <li>Softwares, aplicativos ou funcionalidades criadas, produzidas ou contratadas pelo Banco Digital para os Sites e Aplicativos, assim como sua identidade visual e conteúdo;</li>
                        <li>Nomes de empresas, marcas, patentes, domínios, slogans, propagandas ou qualquer sinal usado para distinguir o Banco Digital inseridos nos Sites e Aplicativos.</li>
                    </ul>

                    <p>Em relação aos conteúdos enviados ou transmitidos por você, autoriza o Banco Digital a utilizar os direitos intelectuais sobre eles de forma irrevogável, respeitando as disposições do item 4 de nossos Termos de Uso. Garante também que esses conteúdos não infringem direitos de terceiros.</p>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Suspensão de Acesso</h3>

                    <p>A qualquer momento, sem aviso prévio ou posterior, o Banco Digital pode suspender, cancelar ou interromper o acesso aos Sites e Aplicativos, especialmente se o uso desses canais contrariar as disposições deste documento.</p>

                    <h3 className='text-xl font-bold mt-6 mb-2'>Legislação Aplicável</h3>

                    <p>A legislação brasileira é aplicável a estes Termos de Uso e Política de Privacidade.</p>

                    <h2 className='text-xl font-bold mt-6 mb-2'>Política de Privacidade</h2>

                    <p>​Estes Termos de Uso aplicam-se a todos os sites e aplicativos do Banco Digital, assim como a todos que acessam essas plataformas. Ao utilizar nossos sites e aplicativos, você expressamente aceita e concorda com as disposições destes Termos de Uso.

                        A preservação da privacidade, a proteção de dados pessoais e o tratamento transparente, ético, seguro e responsável dessas informações são valores fundamentais para nós. Esta Política de Privacidade, também referida como “Política”, esclarece como nossas empresas, atuando como Controladoras de Dados Pessoais, coletam, utilizam, compartilham ou tratam informações e dados pessoais de pessoas físicas, incluindo clientes e terceiros, no contexto de nossas atividades, abrangendo nossos Sites e Aplicativos. Aqui, você também encontrará informações sobre seus direitos relacionados aos seus dados pessoais, conforme estabelecido pela LGPD – Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/18) e outras legislações aplicáveis.</p>

                    <h3>Atualização da política de privacidade</h3>
                    <p>A Política de Privacidade pode passar por alterações sempre que necessário, as quais serão divulgadas em nossos Sites e Aplicativos. Tais modificações serão válidas, eficazes e vinculantes após a publicação da nova versão em nossas plataformas ou quando comunicadas de outra maneira a você.</p>

                    <h3>Informações utilizadas e coletadas</h3>
                    <p>Coletamos informação sobre o device (dispositivo em uso), para uso do antifraude. Em confluência com KYC (Know Your Customer), conforme Circular nº 3.978/20 do Banco Central.</p>
                    <p>Ao utilizar nosso aplicativo, você consente explicitamente com a coleta e armazenamento de dados do usuário ou de uso. Garantimos que seus dados serão tratados com privacidade e segurança, conforme exigido pelas leis de proteção de dados, como o Regulamento Geral de Proteção de Dados (GDPR) da União Europeia. Caso deseje retirar o consentimento, oferecemos uma maneira fácil e compreensível de fazê-lo. As informações sobre a finalidade da coleta de dados são claramente descritas, incluindo exemplos de como esses dados serão utilizados.</p>



                    <h3>Para que usamos os seus dados?</h3>
                    <p>O Banco Digital trata dados pessoais com base nas disposições legais estabelecidas pela Lei Geral de Proteção de Dados (LGPD). As finalidades do tratamento incluem:</p>
                    <p>...</p>

                    <h3>Compartilhamento de informações</h3>
                    <p>O Banco Digital compartilha suas informações somente quando necessário ou pertinente para as finalidades estabelecidas nos contratos com nossos clientes e nesta Política de Privacidade...</p>

                    <h3>Sobre os cookies</h3>
                    <p>Os cookies possibilitam a coleta de dados relacionados à navegação, dependendo do tipo de dispositivo utilizado, das autorizações concedidas por você nas configurações do seu dispositivo e das funcionalidades utilizadas em cada aplicação...</p>

                    <h3>Transferência internacional de dados</h3>
                    <p>Os seus Dados Pessoais podem ser transferidos e processados em outros países, conforme previsto na LGPD e legislação aplicável, para as finalidades descritas nesta Política de Privacidade.</p>

                    <h3>Por quanto tempo mantemos seus dados?</h3>
                    <p>Os Dados Pessoais serão retidos apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados...</p>

                    <h3>Segurança dos dados</h3>
                    <p>A segurança e proteção de dados pessoais e informações do Banco Digital são prioridades...</p>

                    <h3>Seus direitos</h3>
                    <p>A LGPD garante direitos aos Titulares dos Dados. Como Titular de seus Dados Pessoais, você pode fazer os seguintes requerimentos:</p>
                    <p>...</p>

                    <h3>Glossário</h3>
                    <p>Os termos abaixo são utilizados em nossos Termos de Uso e Política de Privacidade:</p>
                    <p><strong>Controlador:</strong> pessoa natural ou jurídica responsável pelas decisões sobre o Tratamento de Dados Pessoais.</p>
                    <p>...</p>

                    <p><em>Última atualização: janeiro de 2024.</em></p>
                </div>
            </div>
        </>
    )
}

export default page
