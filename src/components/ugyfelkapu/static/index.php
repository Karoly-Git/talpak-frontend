<?php
// Define the new content for the .container div
$newContent = '
    <div class="container">
        <div class="icon">🔧</div>
        <h1>We will be back soon!</h1>
        <p>Sorry for the inconvenience, our website is currently under maintenance.</p>
        <p>We appreciate your patience!</p>
        <footer>&copy; 2024 NewCompany.com</footer>
    </div>
';

// Use PHP's output buffer to capture the output
ob_start();

// Include the original HTML file (assuming it is named index.html)
include 'index.html';

// Get the content of the file and store it in a variable
$content = ob_get_clean();

// Use regular expressions to find and replace the .container div
$pattern = '/<div class="container">.*?<\/div>/s';
$replacement = $newContent;

// Replace the content of the .container div with the new content
$newHtml = preg_replace($pattern, $replacement, $content);

// Output the new HTML
echo $newHtml;
?>
