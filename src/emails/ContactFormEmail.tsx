import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from '@react-email/components';

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactFormEmail({
  firstName,
  lastName,
  email,
  phone,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '20px' }}>
        <Container style={{ maxWidth: '600px', backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px' }}>
          <Heading style={{ fontSize: '24px', color: '#2d6a4f', marginBottom: '20px' }}>
            New Contact Form Submission
          </Heading>
          
          <Hr style={{ borderColor: '#e0e0e0', margin: '20px 0' }} />
          
          <Section>
            <Text style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
              <strong style={{ color: '#2d6a4f' }}>Name:</strong> {firstName} {lastName}
            </Text>
            
            <Text style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
              <strong style={{ color: '#2d6a4f' }}>Email:</strong>{' '}
              <a href={`mailto:${email}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>
                {email}
              </a>
            </Text>
            
            <Text style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>
              <strong style={{ color: '#2d6a4f' }}>Phone:</strong>{' '}
              <a href={`tel:${phone}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>
                {phone}
              </a>
            </Text>
          </Section>
          
          <Hr style={{ borderColor: '#e0e0e0', margin: '20px 0' }} />
          
          <Section>
            <Text style={{ fontSize: '16px', color: '#2d6a4f', fontWeight: 'bold', marginBottom: '10px' }}>
              Message:
            </Text>
            <Text style={{ 
              fontSize: '15px', 
              color: '#333', 
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
              backgroundColor: '#f9f9f9',
              padding: '15px',
              borderRadius: '4px',
              border: '1px solid #e0e0e0'
            }}>
              {message}
            </Text>
          </Section>
          
          <Hr style={{ borderColor: '#e0e0e0', margin: '20px 0' }} />
          
          <Text style={{ fontSize: '12px', color: '#888', marginTop: '20px' }}>
            This email was sent from your website's contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
