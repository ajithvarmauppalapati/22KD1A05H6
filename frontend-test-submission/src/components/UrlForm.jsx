import React, { useState } from "react";
import { generateShortUrl } from "../api/urlService";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function UrlForm() {
  const [inputUrl, setInputUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleGenerate = async () => {
    if (!inputUrl) {
      alert("Please enter a URL!");
      return;
    }
    try {
      const result = await generateShortUrl(inputUrl);
      setGeneratedUrl(result.short);
    } catch (err) {
      console.error(err);
      setGeneratedUrl("Error shortening URL");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl);
    alert("Copied to clipboard!");
  };

  return (
    <Box sx={{ mt: 4 }}>
      <TextField
        label="Enter your URL"
        fullWidth
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="secondary" onClick={handleGenerate}>
  Generate Short URL
</Button>


      {generatedUrl && (
        <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <Typography>
            Short URL: <a href={generatedUrl} target="_blank" rel="noopener noreferrer">{generatedUrl}</a>
          </Typography>
          <IconButton onClick={handleCopy} sx={{ ml: 1 }}>
            <ContentCopyIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
