import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import type { GetServerSideProps } from 'next'

const HomePage = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4 underline">
        <span className="mr-2">{t('flag')}</span> {t('home.h1')}
      </h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    /**
     * By default, next-i18next will send only the active locale down to the client on each request.
     * This helps reduce the size of the initial payload sent to the client.
     * However in some cases one may need the translations for other languages at runtime too.
     * - To change the behavior and load extra locales just pass in an array
     * of locales as the last argument to `serverSideTranslations`.
     * `serverSideTranslations(locale, ['common'], null, ['en', 'no'])
     */
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default HomePage
