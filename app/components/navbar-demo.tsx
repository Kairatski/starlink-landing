import NavBar from "./ui/navbar";
import Logo from "./logo";

const menus = [
  {
    id: 1,
    title: 'Главная',
    url: '#home',
    dropdown: false,
  },
  {
    id: 2,
    title: 'Тарифы',
    url: '#pricing',
    dropdown: false,
  },
  {
    id: 3,
    title: 'Преимущества',
    url: '#features',
    dropdown: false,
  },
  {
    id: 4,
    title: 'Контакты',
    url: '#contact',
    dropdown: false,
  },
];

export function NavBarDemo() {
  return (
    <div style={{ 
      background: 'rgba(0, 0, 0, 0.8)', 
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '10px 0'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Logo size={35} />
        <NavBar list={menus} />
      </div>
    </div>
  );
}