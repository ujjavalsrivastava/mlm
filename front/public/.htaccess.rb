<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Redirect to domain with parameters if needed
  RewriteCond %{REQUEST_URI} ^/old-path(.*)$
  RewriteRule ^(.*)$ https://www.digitalduniyaa.in/$1 [R=301,L]

  # Ensure all React routes are handled by index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [QSA,L]
</IfModule>
