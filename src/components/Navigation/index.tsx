import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import type { TFunction } from 'i18next'

const getNavLinks = (t: TFunction<'common', undefined>) => {
  return [
    { id: 1, href: '/', name: t('navigation.homepage') },
    { id: 2, href: '/about', name: t('navigation.about') },
  ]
}

const Navigation = () => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value
    i18n.changeLanguage(newLocale)
    router.push(router.asPath, router.asPath, { locale: newLocale })
  }

  return (
    <nav className="flex gap-2 justify-center py-4">
      {getNavLinks(t).map(({ id, href, name }) => (
        <Link key={id} href={href} className="px-4 py-2">
          {name}
        </Link>
      ))}
      <div className="ml-auto mr-8">
        <select
          name="language"
          onChange={handleChange}
          value={i18n.language}
          className="bg-transparent cursor-pointer p-2"
          aria-label="Select language"
        >
          <option value="en">🇬🇧</option>
          <option value="fr">🇫🇷</option>
        </select>
      </div>
    </nav>
  )
}

export default Navigation
