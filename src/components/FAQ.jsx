import { Accordion, Box, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQ() {
  const faqs = [
    { q: "Is Qtify free?", a: "Yes, completely ad-free!" },
    { q: "Can I download songs?", a: "Not yet – streaming only." },
    { q: "Supported devices?", a: "Web, mobile browsers." },
    { q: "How to search?", a: "Use the search bar above." },
  ];

  return (
    <Box
      sx={{
        py: 8,                    // vertical padding
        px: 3,
        maxWidth: '900px',        // keeps it readable, not too wide
        mx: 'auto',               // centers horizontally
        textAlign: 'center',      // centers text inside
      }}
    >
      <Typography
       variant="h4"
        component="h2"
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: 5,
          color: 'white',
        }}
      >
        FAQs
      </Typography>

      {faqs.map((item, i) => (
        <Accordion key={i} sx={{ bgcolor: '#1E1E1E', color: 'white', mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
            <Typography>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="gray">{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      textAlign: 'center'
    </Box>
  );
}

export default FAQ;