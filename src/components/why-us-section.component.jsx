import whyVivo1 from '../assets/images/why-vivo1.png'
import whyVivo2 from '../assets/images/why-vivo2.png'
import whyVivo3 from '../assets/images/why-vivo3.png'

import s from './why-us-section.module.css'

export function WhyUsSection() {
    return (
        <section className={s.whyUsSection}>
            <h2 className={s.whyUsSectionTitle}>Por que escolher a Vivo?</h2>
            <p className={s.whyUsSectionText}>Somos uma empresa completa, com serviços de celular, banda larga de ultravelocidade, TV por assinatura e serviços digitais, com mais de 100 milhões de clientes por todo o Brasil.</p>
            <div className={s.whyUsCards}>
                
                <div className={s.whyUsCard}>
                    <img src={whyVivo1} alt="#" />
                    <h3 className={s.whyUsCardTitle}>O segredo da qualidade dos nossos serviços</h3>
                    <p className={s.whyUsCardText}>Investimos em tecnologia e atendimento para dar aos nossos clientes cada vez mais motivos para continuarem com a gente.</p>
                </div>

                <div className={s.whyUsCard}>
                    <img src={whyVivo2} alt="#" />
                    <h3 className={s.whyUsCardTitle}>Os melhores produtos e serviços para você</h3>
                    <p className={s.whyUsCardText}>Temos planos de celular, internet, TV, telefone fixo e combos, e trabalhamos constantemente para melhorar os benefícios que oferecemos aos clientes.</p>
                </div>

                <div className={s.whyUsCard}>
                    <img src={whyVivo3} alt="#" />
                    <h3 className={s.whyUsCardTitle}>Navegue e fale sem medo de ficar sem sinal</h3>
                    <p className={s.whyUsCardText}>Cobrimos 97% da população com a nossa rede 4G e mais de 3.200 cidades com o 4.5G. E já chegamos com o 5G em todas capitais do Brasil. Entenda as tecnologias.</p>
                </div>
            
            </div>
        </section>
    )
}