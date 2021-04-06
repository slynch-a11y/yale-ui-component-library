exports.render = function (data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${data.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/dist/css/yale-ui.css">
  <script src="https://use.fontawesome.com/515a2135e3.js"></script>
</head>
<body>
  <!-- Container for sidebar navigation and main content -->
  <div class="bg-white pt-3">
    <div class="container">
      <main id="main-content" tabindex="-1">
        <h1 class="mb-0"><a href="/">Our Components</a></h1>
        <div class="row">
          <!-- Sidebar Navigation -->
          <div class="col-lg-4">
          <ul>
          ${data.collections.component
    .map(
      (component) => `<li><a href="${component.url}">${component.data.title}</a></li>`,
    )
    .join('\n')}
        </ul>
          </div><!-- Main Content -->
          <div class="col-lg-8">
           ${data.content}
          </div>

            </div>
      </main>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
           <body>
</html>`;
};
