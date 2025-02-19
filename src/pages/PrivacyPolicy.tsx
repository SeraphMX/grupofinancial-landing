import { Shield } from 'lucide-react'
import HelmetSEO from '../components/HelmetSEO'

const PrivacyPolicy = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Aviso de Privacidad - Grupo Financial',
    url: 'https://www.grupofinancial.com/aviso-de-privacidad',
    description: 'Consulta nuestra política de privacidad y conoce cómo protegemos tu información en Grupo Financial.',
    publisher: {
      '@type': 'Organization',
      name: 'Grupo Financial',
      logo: 'https://www.grupofinancial.com/logo.png'
    }
  }

  return (
    <>
      <HelmetSEO
        title='Aviso de Privacidad - Grupo Financial'
        description='Consulta nuestra política de privacidad y conoce cómo protegemos tu información en Grupo Financial.'
        keywords='aviso de privacidad, protección de datos, Grupo Financial'
        canonicalUrl='https://www.grupofinancial.com/aviso-de-privacidad'
        openGraph={{ type: 'website', siteName: 'Grupo Financial', locale: 'es_MX' }}
        schemaData={schemaData}
      />
      <div className='pt-20'>
        <div className='bg-primary/5 py-16'>
          <div className='container'>
            <div className='max-w-3xl mx-auto text-center'>
              <Shield className='h-16 w-16 text-primary mx-auto mb-6' />
              <h1 className='text-4xl font-bold text-primary mb-6'>Aviso de Privacidad</h1>
              <p className='text-lg text-gray-600'>
                Estamos comprometidos con la protección y seguridad de tus datos, de acuerdo con la "Ley Federal de Protección de Datos
                Personales en Posesión de los Particulares" (LFPDPPP). Para conocer la ley y obtener más información, consulta{' '}
                <a className='text-primary font-semibold' href='https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf'>
                  este enlace
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className='container py-16'>
          <div className='max-w-3xl mx-auto prose'>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>
                1. Identidad y domicilio de los responsables del tratamiento de los datos personales
              </h2>
              <p className='text-gray-600 mb-4'>
                Grupo Financial es responsable del tratamiento de los Datos Personales en términos del presente Aviso de Privacidad bajo la
                responsabilidad de Pedro Colin Fernández en su carácter de Representante Legal.
              </p>
              <p className='text-gray-600 mb-4'>
                Grupo Financial señala como domicilio convencional para efectos de lo relacionado con este Aviso de Privacidad el ubicado en
                Av. Leibnitz No. 1, 3er piso, Colonia Anzures, C.P. 11590, Miguel Hidalgo en la Ciudad de México.
              </p>

              <p className='text-gray-600 mb-4'>
                Para cualquier duda o aclaración relacionada con el tratamiento de sus datos personales, puede contactarnos a través de los
                siguientes medios:
              </p>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>
                  Correo electrónico:{' '}
                  <a className='text-primary font-semibold' href='mailto:privacidad@grupofinancial.online'>
                    privacidad@grupofinancial.online
                  </a>
                </li>
                <li>
                  Teléfono:{' '}
                  <a className='text-primary font-semibold' href='tel:+525512345678'>
                    55 1234 5678
                  </a>
                </li>
                <li>
                  Sitio web:{' '}
                  <a className='text-primary font-semibold' href='https://grupofinancial.online'>
                    grupofinancial.online
                  </a>
                </li>
              </ul>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>2. Finalidades del tratamiento de datos personales</h2>
              <p className='text-gray-600 mb-4'>Grupo Financial da tratamiento a sus datos personales para:</p>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>
                  El cumplimiento de la relación contractual derivada de la solicitud y/o contratación de nuestros productos o servicios
                </li>
                <li>Verificar, confirmar y validar su identidad</li>
                <li>Administrar, operar y dar seguimiento a los servicios y productos que solicita o contrata con nosotros</li>
              </ul>
              <p className='text-gray-600 my-4'>De forma adicional, Grupo Financial utiliza su información personal para:</p>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>Comercializar productos y servicios</li>
                <li>Envío de ofertas, promociones y publicidad de nuestros productos y servicios financieros</li>
                <li>Elaborar perfiles de clientes para el ofrecimiento de productos y servicios bancarios y financieros</li>
                <li>Elaboración de encuestas</li>
                <li>Campañas de educación e inclusión financiera</li>
              </ul>
              <p className='text-gray-600 my-4'>
                Si bien estas finalidades no son necesarias para la prestación de los servicios y productos que solicita o contrata con
                nosotros, las mismas nos permiten brindarle un mejor servicio y elevar la calidad. Usted podrá negarse al tratamiento de sus
                datos para estas finalidades enviando un correo a
                <a className='text-primary font-semibold' href='mailto:privacidad@grupofinancial.online'>
                  {' '}
                  privacidad@grupofinancial.online
                </a>
                . En caso de no recibir la negativa correspondiente, se entenderá por consentido el uso de su información.
              </p>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>3. Información que recopilamos</h2>
              <p className='text-gray-600 mb-4'>Grupo Financial recopila los siguientes datos personales:</p>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>Datos de identificación</li>
                <li>Datos de contacto</li>
                <li>Datos patrimoniales y financieros</li>
                <li>Datos laborales y académicos</li>
                <li>Datos migratorios</li>
                <li>
                  Datos biométricos <sup>1</sup>
                </li>
              </ul>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>4. Transferencia de datos</h2>
              <p className='text-gray-600 mb-4'>Sus datos personales podrán ser compartidos con::</p>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>Empresas pertenecientes al Grupo FINANCIAL</li>
                <li>
                  Proveedores que prestan servicio a GRUPO FINANCIAL para el mantenimiento o cumplimiento de la relación jurídica con los
                  clientes
                </li>
                <li>Terceros que presten servicios de auditoría a GRUPO FINANCIAL</li>
                <li>Sociedades de información crediticia</li>
                <li>
                  Socios comerciales con quien se tengan celebrados contratos para la comercialización de productos y/o servicios
                  financieros, en beneficio de los clientes
                </li>
                <li>Con el Instituto Nacional Electoral</li>
                <li>Autoridades competentes, previstas en las legislaciones aplicables a las Instituciones Financieras</li>
              </ul>
              <p className='text-gray-600 mt-4'>
                En cualquier caso, GRUPO FINANCIAL comunicará a los receptores, el presente Aviso de Privacidad, con el fin de asegurar que
                su información se utilice en los términos del mismo.
              </p>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>5. Protección de datos</h2>
              <p className='text-gray-600'>
                Grupo Financial implementa medidas de seguridad para proteger su información contra accesos no autorizados, alteraciones o
                pérdidas.Si usted tiene algún comentario o considera que sus Datos Personales han sufrido algún tipo de vulneración, puede
                contactar a nuestra Dirección de Protección de Datos Personales, enviando un correo electrónico a
                <a className='text-primary font-semibold' href='mailto:privacidad@grupofinancial.online'>
                  {' '}
                  privacidad@grupofinancial.online
                </a>
              </p>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>6. Limitación del uso o divulgación</h2>
              <p className='text-gray-600'>
                Si usted desea suspender la recepción de publicidad o promociones de nuestros productos y servicios bancarios y financieros,
                adicional a que usted puede negarse u oponerse al uso de sus Datos Personales en GRUPO FINANCIAL, también podrá solicitar su
                inscripción al Registro Público de Usuarios (REUS) ante la Comisión Nacional para la Protección y Defensa de los Usuarios de
                Servicios Financieros (CONDUSEF). Para mayor información, consulte{' '}
                <a className='text-primary font-semibold' href='https://www.condusef.gob.mx/?p=contenido&idc=2158&idcat=3'>
                  este enlace
                </a>
                .
              </p>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>7. Derechos ARCO</h2>
              <p className='text-gray-600'>
                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Puede presentar su
                solicitud enviando un correo a{' '}
                <a className='text-primary font-semibold' href='mailto:arco@grupofinancial.online'>
                  arco@grupofinancial.online
                </a>
                .
              </p>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>8. Revocación del consentimiento</h2>
              <p className='text-gray-600'>
                En caso de querer revocar las autorizaciones proporcionadas a Grupo Financial, respecto al tratamiento de sus Datos
                Personales, usted podrá enviar su solicitud al correo electrónico
                <a className='text-primary font-semibold' href='mailto:privacidad@grupofinancial.online'>
                  {' '}
                  privacidad@grupofinancial.online
                </a>{' '}
                acompañado de su identificación oficial para la comprobación de su identidad. Dicha revocación únicamente es aplicable para
                aquellas finalidades que no son necesarias para el cumplimiento de las obligaciones derivadas de la contratación de
                productos y servicios bancarios y financieros.
              </p>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>9. Uso de cookies, web beacons y otras tecnologías</h2>
              <p className='text-gray-600'>
                Le informamos que en el sitio web de GRUPO FINANCIAL utilizamos Cookies, Web Beacons y tecnologías de geolocalización. Estos
                mecanismos nos permiten recabar datos de manera automática y simultánea para monitorear su comportamiento como usuario de
                nuestro sitio web, con el fin de mejorar su experiencia en línea y ofrecerle un servicio más personalizado. Es importante
                aclarar que estas tecnologías se emplean exclusivamente en nuestro sitio web y no están asociadas directamente con los
                servicios financieros que ofrecemos.
              </p>
              <p className='text-gray-600 mt-4'>
                Asimismo, le informamos que usted puede deshabilitar el uso de estos mecanismos siguiendo el procedimiento de desactivación
                establecido para su navegador de internet. En el caso de la geolocalización, puede gestionar los permisos de ubicación desde
                la configuración de su dispositivo.
              </p>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>10. Cambios al Aviso de Privacidad</h2>
              <p className='text-gray-600'>
                Este aviso de privacidad puede ser modificado. Cualquier cambio será notificado a través de nuestro sitio web o por correo
                electrónico.
              </p>
            </section>
            <p className='text-gray-600 text-lg'>
              <span className='text-primary font-semibold'>Fecha de última actualización</span>: 1 de enero de 2025.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
