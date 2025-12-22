import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Link,
  Section,
  Font,
} from '@react-email/components';

interface ContactEmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactEmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  message,
}: ContactEmailTemplateProps) {
  return (
    <Html>
      <Font
        fontFamily="Inter, Trebuchet MS, Lucida Grande, sans-serif"
        fallbackFontFamily="sans-serif"
      />
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission</Heading>
          
          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={content}>{firstName} {lastName}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Link href={`mailto:${email}`} style={linkStyle}>
              {email}
            </Link>
          </Section>

          <Section style={section}>
            <Text style={label}>Phone:</Text>
            <Link href={`tel:${phone}`} style={linkStyle}>
              {phone}
            </Link>
          </Section>

          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageContent}>{message}</Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Sent from your Ethiopian website contact form
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = { 
  backgroundColor: '#f3f3f5', 
  fontFamily: 'Inter, "Trebuchet MS", sans-serif',
  padding: '20px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eaeaea',
  borderRadius: '16px',
  margin: '0 auto',
  padding: '20px 0',
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const section = { 
  padding: '16px 32px',
  borderBottom: '1px solid #f0f0f0',
};

const heading = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '24px 32px 16px',
  background: 'linear-gradient(135deg, #2d5016 0%, #d4af37 50%, #8b0000 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const label = {
  color: '#666666',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px 0',
  letterSpacing: '0.5px',
};

const content = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '0',
  padding: '0',
  lineHeight: '1.5',
};

const messageContent = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '0',
  padding: '0',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
};

const linkStyle = {
  color: '#2d5016',
  textDecoration: 'underline',
  fontSize: '16px',
};

const footer = { 
  padding: '24px 32px',
  backgroundColor: '#f9fafb',
  borderRadius: '0 0 16px 16px',
};

const footerText = {
  color: '#999999',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '0',
};
