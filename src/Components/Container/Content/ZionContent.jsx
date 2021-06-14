export default function ZionContent({ top, children }) {
  return (
    <div id='content-area'
      style={{
        background: '#5693DB',
        gridArea: 'content',
        overflow: 'auto'
      }}>
      <div id='content-grd'
        style={{
          position: 'relative',
          top: `${top}`,
          padding: '1%',
          display: 'grid',
          gridTemplateRows: '100px 100% 100px',
          gridTemplateAreas: '"menu-top""productarea""menu-bottom"',
          transition: 'ease 0.5s',
        }}>
        {children}
      </div>
    </div>
  )
}
