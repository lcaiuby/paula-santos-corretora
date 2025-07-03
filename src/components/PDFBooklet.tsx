
import React from 'react';
import jsPDF from 'jspdf';
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const PDFBooklet: React.FC = () => {
  const generatePDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const lineHeight = 7;
    let currentY = margin;

    // Função para adicionar nova página se necessário
    const checkPageBreak = (additionalHeight: number = 0) => {
      if (currentY + additionalHeight > pageHeight - margin) {
        pdf.addPage();
        currentY = margin;
      }
    };

    // Função para adicionar texto com quebra de linha automática
    const addText = (text: string, fontSize: number = 10, isBold: boolean = false, color: string = '#000000') => {
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
      pdf.setTextColor(color);
      
      const lines = pdf.splitTextToSize(text, pageWidth - 2 * margin);
      const textHeight = lines.length * lineHeight;
      
      checkPageBreak(textHeight);
      
      pdf.text(lines, margin, currentY);
      currentY += textHeight + 5;
    };

    // Função para adicionar título de seção
    const addSectionTitle = (title: string) => {
      currentY += 10;
      checkPageBreak(15);
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor('#005D8F');
      pdf.text(title, margin, currentY);
      currentY += 15;
    };

    // Capa
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor('#005D8F');
    pdf.text('Paula Santos', pageWidth / 2, 60, { align: 'center' });
    
    pdf.setFontSize(20);
    pdf.text('Corretora de Seguros', pageWidth / 2, 75, { align: 'center' });
    
    pdf.setFontSize(16);
    pdf.setTextColor('#FF8C29');
    pdf.text('Catálogo de Serviços', pageWidth / 2, 95, { align: 'center' });
    
    pdf.setFontSize(12);
    pdf.setTextColor('#000000');
    pdf.text('Seguros para proteger o que é mais importante pra você', pageWidth / 2, 120, { align: 'center' });

    // Nova página para conteúdo
    pdf.addPage();
    currentY = margin;

    // Sobre nossa corretora
    addSectionTitle('Sobre Nossa Corretora');
    addText('A Paula Santos Corretora de Seguros é especializada em oferecer soluções personalizadas de seguros para proteger você, sua família e seu negócio. Nossa missão é proporcionar tranquilidade e segurança através de um atendimento diferenciado.');
    
    addText('• Experiência e Confiança', 12, true);
    addText('Mais de 15 anos no mercado oferecendo as melhores coberturas com o suporte que você precisa no momento em que mais importa.');
    
    addText('• Atendimento Personalizado', 12, true);
    addText('Entendemos que cada cliente tem necessidades únicas. Por isso, oferecemos soluções personalizadas para cada perfil.');
    
    addText('• Melhores Seguradoras', 12, true);
    addText('Trabalhamos com as principais seguradoras do mercado para garantir o melhor custo-benefício para nossos clientes.');

    // Seguros para você
    addSectionTitle('Seguros para Você');
    
    addText('Seguro Auto', 12, true);
    addText('Proteção completa para seu veículo contra roubos, acidentes e danos a terceiros.');
    
    addText('Seguro Residencial', 12, true);
    addText('Proteção para seu lar contra incêndios, roubos, danos elétricos e muito mais.');
    
    addText('Seguro de Vida', 12, true);
    addText('Tranquilidade para você e sua família em momentos difíceis.');
    
    addText('Seguro Pet', 12, true);
    addText('Cuidado completo para seu animal de estimação, incluindo assistência veterinária.');

    // Seguros para empresas
    addSectionTitle('Seguros para sua Empresa');
    
    addText('Seguro Empresarial', 12, true);
    addText('Proteção completa para seu negócio contra incêndios, roubos e responsabilidade civil.');
    
    addText('Seguro de Responsabilidade Civil', 12, true);
    addText('Proteção contra reclamações de terceiros por danos causados pela sua empresa.');
    
    addText('Seguro de Frota', 12, true);
    addText('Proteção para os veículos da sua empresa, garantindo a continuidade do seu negócio.');
    
    addText('Seguro de Vida em Grupo', 12, true);
    addText('Benefício para seus colaboradores, demonstrando cuidado com o seu time.');

    // Informações de contato
    addSectionTitle('Entre em Contato');
    
    addText('Estamos prontos para atender e tirar todas as suas dúvidas. Fale conosco e descubra a melhor solução para você.');
    
    addText('Telefone: (15) 3212-8080', 11, true);
    addText('E-mail: seguros@paulasantos.com.br', 11, true);
    addText('Endereço:', 11, true);
    addText('Av. Washington Luiz, 845 - Jardim Emília');
    addText('Sorocaba - SP, 18031-000');
    
    addText('Horário de Atendimento:', 11, true);
    addText('Segunda à Sexta: 08:00 às 18:00');

    // Seguradoras parceiras
    addSectionTitle('Seguradoras Parceiras');
    addText('Trabalhamos com as principais seguradoras do mercado para oferecer o melhor para você:');
    addText('• Porto Seguro\n• Bradesco Seguros\n• SulAmérica\n• Allianz\n• Liberty Seguros\n• HDI Seguros');

    // Rodapé na última página
    currentY = pageHeight - 30;
    pdf.setFontSize(10);
    pdf.setTextColor('#666666');
    pdf.text(`© ${new Date().getFullYear()} Paula Santos Corretora de Seguros. Todos os direitos reservados.`, pageWidth / 2, currentY, { align: 'center' });

    // Salvar o PDF
    pdf.save('Paula-Santos-Corretora-Seguros-Catalogo.pdf');
  };

  return (
    <div className="flex gap-4">
      <Button 
        onClick={generatePDF}
        className="bg-insurance-blue hover:bg-insurance-dark-blue text-white"
      >
        <Download className="mr-2 h-4 w-4" />
        Baixar Catálogo PDF
      </Button>
      
      <Button 
        variant="outline"
        onClick={generatePDF}
        className="border-insurance-blue text-insurance-blue hover:bg-insurance-blue hover:text-white"
      >
        <FileText className="mr-2 h-4 w-4" />
        Gerar Booklet
      </Button>
    </div>
  );
};

export default PDFBooklet;
