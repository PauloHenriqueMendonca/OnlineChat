
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

  const ChatsPage = (props) => { 
      const chatProps = useMultiChatLogic(
        '011be0f2-51d1-47f6-807f-b3cfa9d5ff3d',
        props.user.username,
        props.user.secret
    );
    return (
      <div style = {{ height: '100vh'}}>

        <MultiChatWindow {...chatProps} />
        <MultiChatSocket {...chatProps} style = {{ height: '100%'}} />

      </div>
  )
}

export default ChatsPage