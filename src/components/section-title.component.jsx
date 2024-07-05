import s from './section-title.module.css'

export const SectionTitle = ({ children, isCentered }) => {
  return (
    <h2
      className={
        isCentered ? `${s.sectionTitle} ${s.centered}` : s.sectionTitle
      }
    >
      {children}
    </h2>
  )
}
