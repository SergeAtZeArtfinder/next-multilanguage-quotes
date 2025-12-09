import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import type { GetServerSideProps } from 'next'

const AboutPage = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4 underline">
        <span className="mr-2">{t('flag')}</span>
        {t('about.h1')}
      </h1>
      <blockquote className="max-w-3xl mx-auto my-4 flex flex-col border-l-4 border-gray-400 pl-4">
        <h2 className="text-2xl font-semibold mb-2">
          {t('about.art_of_small_steps.title')}
        </h2>
        <div className="flex flex-col gap-2 items-end">
          <Image
            src="/images/Antoine_De_St_Exupery.webp"
            alt="Antoine de Saint-Exupéry"
            width={200}
            height={300}
            className="self-center rounded ml-auto w-auto h-auto"
          />
          <small className="mb-4 text-right">
            Antoine de Saint-Exupéry (1900-1944)
          </small>
        </div>
        <p className="whitespace-pre-line">
          {t('about.art_of_small_steps.description')}
        </p>
      </blockquote>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'], null, [
        'en',
        'fr',
      ])),
    },
  }
}

export default AboutPage
