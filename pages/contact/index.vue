<template>
  <div>
    <img class="cover-image" :src="'/img/contact-nick.jpg'" />
    <main>
      <section class="w-full max-w-5xl mx-auto">
        <h1 class="title">{{ $t('contact.title') }}</h1>
        <div class="flex flex-wrap justify-between">
          <div class="mb-2">
            <p>
              Weinmacher Nick Gerretsen<br />
              Kirchbichl Friedlach<br />
              9555 Glanegg<br />
              Kärnten<br />
              Österreich
            </p>
            <p>
              Telefon: <a href="tel:+436765408646">+43 676 5408646</a><br />
              E-Mail:
              <a href="mailto:weinmacher.nick@gmail.com?subject=Impressum Weinmacher Nick">weinmacher.nick@gmail.com</a>
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.942751879629!2d14.198393315502694!3d46.72659065634351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQzJzM1LjciTiAxNMKwMTInMDIuMSJF!5e0!3m2!1sen!2sat!4v1631906145472!5m2!1sen!2sat"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>
