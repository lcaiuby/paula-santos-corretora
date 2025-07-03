
import React from 'react';
import jsPDF from 'jspdf';
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const PDFBooklet: React.FC = () => {
  const generatePDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    let currentY = margin;

    // Cores do website
    const colors = {
      primary: [0, 93, 143], // #005D8F
      accent: [255, 140, 41], // #FF8C29
      darkBlue: [0, 63, 97], // #003F61
      white: [255, 255, 255],
      lightGray: [245, 245, 245],
      cardBorder: [220, 220, 220],
      darkGray: [60, 60, 60],
      mediumGray: [120, 120, 120]
    };

    // Função para verificar quebra de página
    const checkPageBreak = (additionalHeight: number = 0) => {
      if (currentY + additionalHeight > pageHeight - margin) {
        pdf.addPage();
        currentY = margin;
        return true;
      }
      return false;
    };

    // Função para adicionar retângulo com bordas arredondadas
    const addRoundedRect = (x: number, y: number, width: number, height: number, radius: number, fillColor?: number[], strokeColor?: number[]) => {
      if (fillColor) {
        pdf.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
      }
      if (strokeColor) {
        pdf.setDrawColor(strokeColor[0], strokeColor[1], strokeColor[2]);
        pdf.setLineWidth(0.5);
      }
      
      // Simulando bordas arredondadas com linhas
      pdf.rect(x, y, width, height, fillColor ? 'F' : 'S');
    };

    // Função para adicionar texto estilizado
    const addText = (
      text: string, 
      x: number, 
      y: number, 
      fontSize: number = 10, 
      isBold: boolean = false, 
      color: number[] = colors.darkGray,
      align: 'left' | 'center' | 'right' = 'left',
      maxWidth?: number
    ) => {
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
      pdf.setTextColor(color[0], color[1], color[2]);
      
      if (maxWidth) {
        const lines = pdf.splitTextToSize(text, maxWidth);
        const alignOption = align === 'left' ? undefined : { align };
        pdf.text(lines, x, y, alignOption);
        return lines.length * (fontSize * 0.4);
      } else {
        const alignOption = align === 'left' ? undefined : { align };
        pdf.text(text, x, y, alignOption);
        return fontSize * 0.4;
      }
    };

    // Função para adicionar imagem (placeholder colorido por enquanto)
    const addImagePlaceholder = (x: number, y: number, width: number, height: number, icon: string, bgColor: number[]) => {
      // Fundo colorido para simular imagem
      pdf.setFillColor(bgColor[0], bgColor[1], bgColor[2]);
      pdf.rect(x, y, width, height, 'F');
      
      // Ícone/texto no centro
      pdf.setFillColor(colors.white[0], colors.white[1], colors.white[2]);
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      const textWidth = pdf.getTextWidth(icon);
      pdf.text(icon, x + (width - textWidth) / 2, y + height / 2 + 2);
    };

    // Função para adicionar card de serviço com visual melhorado
    const addServiceCard = (title: string, description: string, icon: string, isLastInRow: boolean = false) => {
      const cardWidth = (pageWidth - 3 * margin) / 2;
      const cardHeight = 35;
      const cardX = isLastInRow ? margin + cardWidth + margin : margin;
      
      checkPageBreak(cardHeight + 10);
      
      // Sombra do card
      pdf.setFillColor(200, 200, 200);
      pdf.rect(cardX + 1, currentY + 1, cardWidth, cardHeight, 'F');
      
      // Card principal
      pdf.setFillColor(colors.white[0], colors.white[1], colors.white[2]);
      pdf.setDrawColor(colors.cardBorder[0], colors.cardBorder[1], colors.cardBorder[2]);
      pdf.setLineWidth(0.5);
      pdf.rect(cardX, currentY, cardWidth, cardHeight, 'FD');
      
      // Ícone
      addImagePlaceholder(cardX + 5, currentY + 5, 12, 12, icon, colors.primary);
      
      // Título
      addText(title, cardX + 22, currentY + 12, 11, true, colors.primary);
      
      // Descrição
      addText(description, cardX + 5, currentY + 20, 9, false, colors.darkGray, 'left', cardWidth - 10);
      
      if (isLastInRow) {
        currentY += cardHeight + 8;
      }
    };

    // Função para adicionar seção com header estilizado
    const addSectionHeader = (title: string, bgColor: number[] = colors.primary) => {
      checkPageBreak(25);
      
      // Header com gradiente simulado
      pdf.setFillColor(bgColor[0], bgColor[1], bgColor[2]);
      pdf.rect(0, currentY - 2, pageWidth, 18, 'F');
      
      // Linha de destaque
      pdf.setFillColor(colors.accent[0], colors.accent[1], colors.accent[2]);
      pdf.rect(0, currentY + 14, pageWidth, 2, 'F');
      
      // Título
      addText(title, margin, currentY + 8, 16, true, colors.white);
      
      currentY += 25;
    };

    // CAPA MELHORADA
    // Fundo principal
    pdf.setFillColor(colors.primary[0], colors.primary[1], colors.primary[2]);
    pdf.rect(0, 0, pageWidth, 140, 'F');
    
    // Elementos decorativos
    pdf.setFillColor(colors.accent[0], colors.accent[1], colors.accent[2]);
    pdf.circle(pageWidth - 30, 30, 20, 'F');
    pdf.circle(20, 120, 15, 'F');
    
    // Logo placeholder
    addImagePlaceholder(pageWidth/2 - 25, 25, 50, 30, 'LOGO', colors.white);
    
    // Título principal
    addText('Paula Santos', pageWidth / 2, 75, 24, true, colors.white, 'center');
    addText('Corretora de Seguros', pageWidth / 2, 85, 16, false, colors.white, 'center');
    
    // Faixa destacada
    pdf.setFillColor(colors.accent[0], colors.accent[1], colors.accent[2]);
    pdf.rect(0, 95, pageWidth, 12, 'F');
    addText('Catálogo de Serviços', pageWidth / 2, 103, 14, true, colors.white, 'center');
    
    // Subtítulo
    addText('Seguros para proteger o que é mais importante pra você', pageWidth / 2, 120, 12, false, colors.white, 'center');
    
    // Rodapé decorativo
    pdf.setFillColor(colors.darkBlue[0], colors.darkBlue[1], colors.darkBlue[2]);
    pdf.rect(0, 125, pageWidth, 15, 'F');
    addText('Experiência • Confiança • Atendimento Personalizado', pageWidth / 2, 135, 10, false, colors.white, 'center');

    // NOVA PÁGINA - SOBRE
    pdf.addPage();
    currentY = margin;

    addSectionHeader('Sobre Nossa Corretora');
    
    // Card principal sobre a empresa
    pdf.setFillColor(colors.lightGray[0], colors.lightGray[1], colors.lightGray[2]);
    pdf.rect(margin, currentY, pageWidth - 2 * margin, 30, 'F');
    
    addImagePlaceholder(margin + 5, currentY + 5, 20, 20, '👥', colors.primary);
    
    addText('A Paula Santos Corretora de Seguros', margin + 30, currentY + 12, 12, true, colors.primary);
    addText('Especializada em oferecer soluções personalizadas de seguros para', margin + 30, currentY + 18, 10, false, colors.darkGray);
    addText('proteger você, sua família e seu negócio.', margin + 30, currentY + 24, 10, false, colors.darkGray);
    
    currentY += 40;

    // Cards de diferenciais em grid
    addServiceCard('Experiência', 'Mais de 15 anos no mercado oferecendo as melhores coberturas.', '🏆', false);
    addServiceCard('Confiança', 'Soluções personalizadas para cada perfil e necessidade.', '🤝', true);
    
    addServiceCard('Atendimento', 'Suporte personalizado quando você mais precisa.', '👥', false);
    addServiceCard('Parcerias', 'Trabalho com as principais seguradoras do mercado.', '🏢', true);

    // SEGUROS PESSOAIS
    addSectionHeader('Seguros para Você', colors.accent);
    
    addServiceCard('Seguro Auto', 'Proteção completa para seu veículo contra roubos e acidentes.', '🚗', false);
    addServiceCard('Seguro Casa', 'Proteção para seu lar contra incêndios, roubos e mais.', '🏠', true);
    
    addServiceCard('Seguro Vida', 'Tranquilidade para você e sua família.', '❤️', false);
    addServiceCard('Seguro Pet', 'Cuidado completo para seu animal de estimação.', '🐕', true);

    // SEGUROS EMPRESARIAIS
    addSectionHeader('Seguros para sua Empresa');
    
    addServiceCard('Empresarial', 'Proteção completa para seu negócio.', '🏭', false);
    addServiceCard('Resp. Civil', 'Proteção contra reclamações de terceiros.', '⚖️', true);
    
    addServiceCard('Frota', 'Proteção para veículos da empresa.', '🚛', false);
    addServiceCard('Vida Grupo', 'Benefício para seus colaboradores.', '👥', true);

    // NOVA PÁGINA - CONTATO
    pdf.addPage();
    currentY = margin;

    addSectionHeader('Entre em Contato', colors.accent);
    
    // Card de contato principal
    pdf.setFillColor(colors.lightGray[0], colors.lightGray[1], colors.lightGray[2]);
    pdf.setDrawColor(colors.cardBorder[0], colors.cardBorder[1], colors.cardBorder[2]);
    pdf.rect(margin, currentY, pageWidth - 2 * margin, 60, 'FD');
    
    // Informações de contato com ícones
    addImagePlaceholder(margin + 10, currentY + 8, 8, 8, '📞', colors.primary);
    addText('Telefone: (15) 3212-8080', margin + 25, currentY + 13, 11, true, colors.primary);
    
    addImagePlaceholder(margin + 10, currentY + 20, 8, 8, '✉️', colors.primary);
    addText('E-mail: seguros@paulasantos.com.br', margin + 25, currentY + 25, 11, true, colors.primary);
    
    addImagePlaceholder(margin + 10, currentY + 32, 8, 8, '📍', colors.primary);
    addText('Endereço:', margin + 25, currentY + 37, 11, true, colors.primary);
    addText('Av. Washington Luiz, 845 - Jardim Emília', margin + 25, currentY + 43, 10, false, colors.darkGray);
    addText('Sorocaba - SP, 18031-000', margin + 25, currentY + 49, 10, false, colors.darkGray);
    
    currentY += 70;
    
    // Horário em destaque
    pdf.setFillColor(colors.primary[0], colors.primary[1], colors.primary[2]);
    pdf.rect(margin, currentY, pageWidth - 2 * margin, 15, 'F');
    addImagePlaceholder(margin + 10, currentY + 3, 8, 8, '🕒', colors.white);
    addText('Horário: Segunda à Sexta: 08:00 às 18:00', margin + 25, currentY + 8, 11, true, colors.white);
    
    currentY += 25;

    // SEGURADORAS PARCEIRAS com logos simulados
    addSectionHeader('Seguradoras Parceiras', colors.darkBlue);
    
    const seguradoras = [
      { nome: 'Porto Seguro', cor: colors.primary },
      { nome: 'Bradesco', cor: colors.accent },
      { nome: 'SulAmérica', cor: colors.primary }
    ];
    
    let xPos = margin;
    seguradoras.forEach((seg, index) => {
      const logoWidth = (pageWidth - 4 * margin) / 3;
      
      // Card da seguradora
      pdf.setFillColor(colors.white[0], colors.white[1], colors.white[2]);
      pdf.setDrawColor(colors.cardBorder[0], colors.cardBorder[1], colors.cardBorder[2]);
      pdf.rect(xPos, currentY, logoWidth, 25, 'FD');
      
      // Logo simulado
      addImagePlaceholder(xPos + 5, currentY + 5, logoWidth - 10, 15, seg.nome, seg.cor);
      
      xPos += logoWidth + margin;
    });
    
    currentY += 35;
    
    const seguradoras2 = [
      { nome: 'Allianz', cor: colors.primary },
      { nome: 'Liberty', cor: colors.accent },
      { nome: 'HDI', cor: colors.primary }
    ];
    
    xPos = margin;
    seguradoras2.forEach((seg) => {
      const logoWidth = (pageWidth - 4 * margin) / 3;
      
      pdf.setFillColor(colors.white[0], colors.white[1], colors.white[2]);
      pdf.setDrawColor(colors.cardBorder[0], colors.cardBorder[1], colors.cardBorder[2]);
      pdf.rect(xPos, currentY, logoWidth, 25, 'FD');
      
      addImagePlaceholder(xPos + 5, currentY + 5, logoWidth - 10, 15, seg.nome, seg.cor);
      
      xPos += logoWidth + margin;
    });

    // RODAPÉ FINAL
    currentY = pageHeight - 20;
    pdf.setFillColor(colors.primary[0], colors.primary[1], colors.primary[2]);
    pdf.rect(0, currentY, pageWidth, 20, 'F');
    addText(`© ${new Date().getFullYear()} Paula Santos Corretora de Seguros - Todos os direitos reservados`, 
             pageWidth / 2, currentY + 10, 9, false, colors.white, 'center');

    pdf.save('Paula-Santos-Seguros-Catalogo-Visual.pdf');
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
