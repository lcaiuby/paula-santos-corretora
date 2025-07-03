
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
    let currentY = margin;

    // Cores do website
    const colors = {
      primary: [0, 93, 143], // #005D8F
      accent: [255, 140, 41], // #FF8C29
      darkBlue: [0, 63, 97], // #003F61
      white: [255, 255, 255],
      lightGray: [240, 240, 240],
      darkGray: [60, 60, 60]
    };

    // Função para adicionar nova página se necessário
    const checkPageBreak = (additionalHeight: number = 0) => {
      if (currentY + additionalHeight > pageHeight - margin) {
        pdf.addPage();
        currentY = margin;
      }
    };

    // Função para adicionar retângulo colorido
    const addColoredRect = (x: number, y: number, width: number, height: number, color: number[]) => {
      pdf.setFillColor(color[0], color[1], color[2]);
      pdf.rect(x, y, width, height, 'F');
    };

    // Função para adicionar texto com estilo
    const addStyledText = (
      text: string, 
      x: number, 
      y: number, 
      fontSize: number = 10, 
      isBold: boolean = false, 
      color: number[] = colors.darkGray,
      align: 'left' | 'center' | 'right' = 'left'
    ) => {
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
      pdf.setTextColor(color[0], color[1], color[2]);
      
      const alignOption = align === 'left' ? undefined : { align };
      pdf.text(text, x, y, alignOption);
    };

    // Função para adicionar parágrafo com quebra de linha
    const addParagraph = (text: string, fontSize: number = 10, color: number[] = colors.darkGray) => {
      pdf.setFontSize(fontSize);
      pdf.setTextColor(color[0], color[1], color[2]);
      
      const lines = pdf.splitTextToSize(text, pageWidth - 2 * margin);
      const lineHeight = fontSize * 0.4;
      const textHeight = lines.length * lineHeight;
      
      checkPageBreak(textHeight + 10);
      
      pdf.text(lines, margin, currentY);
      currentY += textHeight + 8;
    };

    // Função para adicionar título de seção com fundo colorido
    const addSectionHeader = (title: string, bgColor: number[] = colors.primary) => {
      checkPageBreak(25);
      
      // Fundo colorido para o título
      addColoredRect(0, currentY - 5, pageWidth, 15, bgColor);
      
      // Texto do título
      addStyledText(title, margin, currentY + 5, 14, true, colors.white);
      
      currentY += 20;
    };

    // Função para adicionar card de serviço
    const addServiceCard = (title: string, description: string) => {
      checkPageBreak(35);
      
      // Fundo do card
      addColoredRect(margin - 5, currentY - 3, pageWidth - 2 * margin + 10, 25, colors.lightGray);
      
      // Título do serviço
      addStyledText(title, margin, currentY + 5, 12, true, colors.primary);
      
      // Descrição
      pdf.setFontSize(10);
      pdf.setTextColor(colors.darkGray[0], colors.darkGray[1], colors.darkGray[2]);
      const descLines = pdf.splitTextToSize(description, pageWidth - 2 * margin - 10);
      pdf.text(descLines, margin, currentY + 12);
      
      currentY += 35;
    };

    // CAPA DO PDF
    // Fundo azul da capa
    addColoredRect(0, 0, pageWidth, 120, colors.primary);
    
    // Título principal
    addStyledText('Paula Santos', pageWidth / 2, 40, 28, true, colors.white, 'center');
    addStyledText('Corretora de Seguros', pageWidth / 2, 55, 18, false, colors.white, 'center');
    
    // Faixa laranja
    addColoredRect(0, 65, pageWidth, 15, colors.accent);
    addStyledText('Catálogo de Serviços', pageWidth / 2, 75, 16, true, colors.white, 'center');
    
    // Subtítulo
    addStyledText('Seguros para proteger o que é mais importante pra você', 
                  pageWidth / 2, 95, 12, false, colors.white, 'center');
    
    // Rodapé da capa
    addColoredRect(0, 105, pageWidth, 15, colors.darkBlue);
    addStyledText('Experiência • Confiança • Atendimento Personalizado', 
                  pageWidth / 2, 115, 10, false, colors.white, 'center');

    // Nova página para conteúdo
    pdf.addPage();
    currentY = margin;

    // SOBRE A CORRETORA
    addSectionHeader('Sobre Nossa Corretora');
    
    addParagraph('A Paula Santos Corretora de Seguros é especializada em oferecer soluções personalizadas de seguros para proteger você, sua família e seu negócio.', 11);
    
    // Cards de diferenciais
    addServiceCard('🏆 Experiência e Confiança', 
                   'Mais de 15 anos no mercado oferecendo as melhores coberturas.');
    
    addServiceCard('👥 Atendimento Personalizado', 
                   'Soluções personalizadas para cada perfil e necessidade.');
    
    addServiceCard('🏢 Melhores Seguradoras', 
                   'Parceria com as principais seguradoras do mercado.');

    // SEGUROS PARA VOCÊ
    addSectionHeader('Seguros para Você', colors.accent);
    
    addServiceCard('🚗 Seguro Auto', 
                   'Proteção completa para seu veículo contra roubos, acidentes e danos a terceiros.');
    
    addServiceCard('🏠 Seguro Residencial', 
                   'Proteção para seu lar contra incêndios, roubos, danos elétricos e muito mais.');
    
    addServiceCard('❤️ Seguro de Vida', 
                   'Tranquilidade para você e sua família em momentos difíceis.');
    
    addServiceCard('🐕 Seguro Pet', 
                   'Cuidado completo para seu animal de estimação, incluindo assistência veterinária.');

    // SEGUROS EMPRESARIAIS
    addSectionHeader('Seguros para sua Empresa');
    
    addServiceCard('🏭 Seguro Empresarial', 
                   'Proteção completa para seu negócio contra incêndios, roubos e responsabilidade civil.');
    
    addServiceCard('⚖️ Responsabilidade Civil', 
                   'Proteção contra reclamações de terceiros por danos causados pela sua empresa.');
    
    addServiceCard('🚛 Seguro de Frota', 
                   'Proteção para os veículos da sua empresa, garantindo a continuidade do negócio.');
    
    addServiceCard('👥 Seguro de Vida em Grupo', 
                   'Benefício para seus colaboradores, demonstrando cuidado com o seu time.');

    // INFORMAÇÕES DE CONTATO
    addSectionHeader('Entre em Contato', colors.accent);
    
    // Caixa de contato estilizada
    addColoredRect(margin - 5, currentY - 3, pageWidth - 2 * margin + 10, 45, colors.lightGray);
    
    addStyledText('📞 Telefone: (15) 3212-8080', margin, currentY + 8, 11, true, colors.primary);
    addStyledText('✉️ E-mail: seguros@paulasantos.com.br', margin, currentY + 18, 11, true, colors.primary);
    addStyledText('📍 Endereço:', margin, currentY + 28, 11, true, colors.primary);
    addStyledText('Av. Washington Luiz, 845 - Jardim Emília', margin + 5, currentY + 35, 10, false, colors.darkGray);
    addStyledText('Sorocaba - SP, 18031-000', margin + 5, currentY + 42, 10, false, colors.darkGray);
    
    currentY += 55;
    
    // Horário de atendimento
    addColoredRect(margin - 5, currentY - 3, pageWidth - 2 * margin + 10, 15, colors.primary);
    addStyledText('🕒 Horário: Segunda à Sexta: 08:00 às 18:00', margin, currentY + 5, 11, true, colors.white);
    
    currentY += 25;

    // SEGURADORAS PARCEIRAS
    addSectionHeader('Seguradoras Parceiras', colors.darkBlue);
    
    addParagraph('Trabalhamos com as principais seguradoras do mercado:', 11);
    
    const seguradoras = [
      '• Porto Seguro', '• Bradesco Seguros', '• SulAmérica', 
      '• Allianz', '• Liberty Seguros', '• HDI Seguros'
    ];
    
    seguradoras.forEach(seguradora => {
      addStyledText(seguradora, margin + 10, currentY, 10, false, colors.primary);
      currentY += 6;
    });

    // RODAPÉ FINAL
    currentY = pageHeight - 25;
    addColoredRect(0, currentY - 5, pageWidth, 20, colors.primary);
    addStyledText(`© ${new Date().getFullYear()} Paula Santos Corretora de Seguros. Todos os direitos reservados.`, 
                  pageWidth / 2, currentY + 5, 9, false, colors.white, 'center');

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
