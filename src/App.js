import Button from "./components/Button";
import FollowButton from "./components/Button/FollowButton";
import Input from "./components/Input";
import SearchInput from "./components/Input/SearchInput";
import DefaultLink from "./components/Link";
import ActionLink from "./components/Link/ActionLink";
import './components/style.css';
import Tag from "./components/Tag";
import LiveTag from "./components/Tag/LiveTag";

export default function App() {
  return (
    <div className="app twitter-font"
      style={{
        marginBottom: '16rem'
      }}
    >
      <div className="button-variations-wrapper" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.2rem',
          padding: '3rem'
        }}
      >
        <h2>Button Components</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.2rem'
        }}>
          <Button>
            Primary Button
          </Button>
          <Button type="solid">
            Primary Button
          </Button>
          <Button type="secondary">
            Primary Button
          </Button>
          <Button type="solid-secondary">
            Primary Button
          </Button>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.2rem'
        }}>
          <Button size="small">
            Primary Button
          </Button>
          <Button type="solid" size="small">
            Primary Button
          </Button>
          <Button type="secondary" size="small">
            Primary Button
          </Button>
          <Button type="solid-secondary" size="small">
            Primary Button
          </Button>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.2rem'
        }}>
          <Button size="large">
            Primary Button
          </Button>
          <Button type="solid" size="large">
            Primary Button
          </Button>
          <Button type="secondary" size="large">
            Primary Button
          </Button>
          <Button type="solid-secondary" size="large">
            Primary Button
          </Button>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.2rem'
        }}>
          <FollowButton size="small" 
            username="yashsehgaldev"
          />
        </div>
      </div>
      <div className="links-variations-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.2rem',
          paddingRight: '3rem',
          paddingLeft: '3rem',
          paddingTop: '1rem'
        }}
      >
        <h2>Link Components</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.2rem'
        }}>
          <DefaultLink>Share this tweet</DefaultLink>
          <ActionLink>Share this tweet</ActionLink>
        </div>
      </div>
      <div className="tags-variations-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.2rem',
          paddingRight: '3rem',
          paddingLeft: '3rem',
          paddingTop: '1rem'
        }}
      >
        <h2>Tag Components</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.2rem'
        }}>
          <Tag>Follows You</Tag>
          <LiveTag />
        </div>
      </div>
      <div className="input-variations-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.2rem',
          paddingRight: '3rem',
          paddingLeft: '3rem',
          paddingTop: '1rem'
        }}
      >
        <h2>Input Components</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.2rem'
        }}>
          <Input 
            type="text"
            placeholder="Search for accounts, topics, etc"
          />
          <Input 
            type="text"
            placeholder="Search and Message People"
            UIVariant="message"
          />
          <SearchInput />
        </div>
      </div>
    </div>
  )
}