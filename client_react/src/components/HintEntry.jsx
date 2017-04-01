import React from 'react'
import { Segment, Icon, Button, Divider } from 'semantic-ui-react'

const HintEntry = (props) => (
  <Segment>
    <div style={{overflow: 'scroll', width: '100%',}}>
    Pellentesque habitant morbi tristique senectusasdfa asdf. {props.data}
    </div>
    <Divider/>
    <Button
      size='medium'
      icon>
      <Icon name='like' style={{float: 'right'}} />
    </Button>

    <Button
      size='medium'
      icon>
      <Icon name='close' style={{float: 'right'}}/>
    </Button>
  </Segment>
)

export default HintEntry;