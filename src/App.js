import React, { useState } from 'react';
import { Container, Grid, Typography, Button, TextField, Card, CardContent, Box, IconButton, InputAdornment } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import LinkIcon from '@mui/icons-material/Link';
import ExampleComponent from './Components/Animations/ExampleComponent';
import FileUploadComponent from './Components/Pages/FileUploadComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import apiService from './ApiServices/ApiService';


function App() {
  const [userInput, setUserInput] = useState('');
  const [aiResponses, setAiResponses] = useState([]);

  const handleGenerateResponse = async () => {
    const simulatedResponse = `AI Response for "${userInput}"`;
    var obj = {
      "doc_id": "ZRqrTA_20241019143437",
      "query": simulatedResponse
    }
    var response = await apiService.startChat(obj);
    setAiResponses(response.ai_response);
    console.log("FA AI Response : ", response);
    // setAiResponses((prevResponses) => [simulatedResponse, ...prevResponses]);
  };

  return (
    <Container maxWidth="md" sx={{ padding: '2rem' }}>
      {/* Header */}
     
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Box
          sx={{
            display: 'inline-block',
            background: 'linear-gradient(to right, #8E2DE2, #4A00E0)',
            padding: '20px',
            borderRadius: '12px',
            height: '90px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            <img src={`${process.env.PUBLIC_URL}/Images/f3png.png`} height={200} alt="f3-digitals" />
          </Typography>

        </Box>
        <Typography color="text.secondary" sx={{ textAlign: 'left' }}>
          <span style={{ color: 'linear-gradient(to right, #8E2DE2, #4A00E0)', fontSize: '35px', fontWeight: 'bold' }}>Hi There, </span><br />
        </Typography>
        <ExampleComponent />
      </Box>

      {/* AI Suggestions Section */}
      <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
        {['Content', 'Tables', 'Graph', 'Image'].map((suggestion, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Box
              sx={{
                backgroundColor: '#f3f3f3',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: 2,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#4A00E0' }}>
                {suggestion}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Text Input Section with Attachment Options */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Enter your text"
            variant="outlined"
            fullWidth
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            sx={{ marginBottom: '1rem' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" aria-label="add attachment">
                    <AttachFileIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="add image">
                    <ImageIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="add web link">
                    <LinkIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleGenerateResponse}
            style={{ backgroundColor: 'linear-gradient(to right, #8E2DE2, #4A00E0)' }}
          >
            Generate AI Response
          </Button>
        </Grid>
      </Grid>

      {/* AI Response History Section */}
{aiResponses.length > 0 && (
  <Grid container spacing={3} sx={{ marginTop: '2rem' }}>
    <Grid item xs={12}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" color="primary" gutterBottom>
            AI Responses
          </Typography>
          {/* Table to display AI Responses */}
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {/* Dynamically generate table headers based on the first aiResponse keys */}
                {Object.keys(aiResponses[0]).map((key, index) => (
                  <th
                    key={index}
                    style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      backgroundColor: '#f2f2f2',
                      color: '#4A00E0',
                    }}
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Dynamically generate table rows for each aiResponse */}
              {aiResponses.map((response, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(response).map((value, colIndex) => (
                    <td
                      key={colIndex}
                      style={{
                        border: '1px solid #ddd',
                        padding: '8px',
                        textAlign: 'center',
                      }}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
)}
    </Container>
  );
}

export default App;
