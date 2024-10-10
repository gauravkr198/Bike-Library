import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix (optional) - To add versioning or grouping
  app.setGlobalPrefix('api/v1'); // Optional for better versioning or grouping

  // Swagger Configuration with more customization
  const config = new DocumentBuilder()
    .setTitle('Bike Library API')
    .setVersion('1.0')
    .addTag('bikes', 'Endpoints related to bike operations') // Tag the endpoints
    .addServer('http://localhost:3000', 'Development server') // Set up the server
    .addBearerAuth() // Add JWT or Bearer token authentication (if needed)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Customize Swagger UI
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Bike Library API Docs',  // Customize the title of the Swagger UI tab
    customfavIcon: 'https://example.com/favicon.ico', // Optional: add a custom favicon
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.5/swagger-ui.css', // Optional: load custom CSS
    swaggerOptions: {
      docExpansion: 'none',  // Collapse all routes by default
      filter: true,          // Enable filtering of endpoints
      showRequestDuration: true, // Show request duration in responses
    },
  });

  await app.listen(3000);
}
bootstrap();
