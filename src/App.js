import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, List, ListItem, Epic, Tabbar, TabbarItem, platform, IOS, Search, Cell, FormLayout, File } from '@vkontakte/vkui';
import { Header, HorizontalScroll, itemStyle, Avatar, Div, InfoRow } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon48Camera from '@vkontakte/icons/dist/48/camera';

import connect from '@vkontakte/vkui-connect';

connect.send("VKWebAppInit", {}); 
connect.subscribe((e) => console.log(e)); 

class MemeSearch extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange (search) { this.setState({ search }); }

  render() {
    return (
      <div>
        <PanelHeader
          noShadow
          // right={<HeaderButton onClick={this.props.goHeaderSearch} key="add"><Icon24Add /></HeaderButton>}
        >
          Search your meme
        </PanelHeader>
        <Search value={this.state.search} onChange={this.onChange}/>
        <Cell>
          <FormLayout>
            <File before={<Icon48Camera />} size="xl" level="outline"> 
              <div>
                <br /><br /><br /><br /><br /><br />
              </div>
            </File>
          </FormLayout>
        </Cell>
      </div>
    );
  }
}

class MemeExplorer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    
    }
  } 

  render() {
    return (
      <div style={{ paddingBottom: 80 }}>
        <PanelHeader>Explore your meme</PanelHeader>

        <Group>
          <Header level="2">Similar</Header>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <div>
                <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>
              </div>

              <div>
                <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>
              </div>

              <div>
                <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>
              </div>

            </div>
          </HorizontalScroll>
        </Group>



        <Group>
          <Header level="2">
            Коровка говорит "муууу", собачка говорит "гав-гав"
          </Header>
          <Div align="middle">
            <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

            <InfoRow>
              Коровка говорит "муууу" - трехпанельный комикс с животными, на котором корова говорит "муууу", 
              собачка говорит "гав-гав", а третий персонаж изображает что-то плохое, свойственное людям. 
              Например, крыса показывает человека, готового подставить друга, а змея - женщину, 
              которая ругается с мужчиной.
            </InfoRow>
          </Div>
        </Group>

      </div>
    );
  }
}

class MemeHot extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    
    }
  } 

  render() {
    return (
      <div style={{ paddingBottom: 80 }}>
        <PanelHeader>Hot memes</PanelHeader>

        <Group>
          <Div align="middle">
            <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

            <InfoRow>
              Коровка говорит "муууу" - трехпанельный комикс с животными, на котором корова говорит "муууу", 
              собачка говорит "гав-гав", а третий персонаж изображает что-то плохое, свойственное людям. 
              Например, крыса показывает человека, готового подставить друга, а змея - женщину, 
              которая ругается с мужчиной.
            </InfoRow>
          </Div>
        </Group>

        <Group>
          <Div align="middle">
            <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

            <InfoRow>
              Коровка говорит "муууу" - трехпанельный комикс с животными, на котором корова говорит "муууу", 
              собачка говорит "гав-гав", а третий персонаж изображает что-то плохое, свойственное людям. 
              Например, крыса показывает человека, готового подставить друга, а змея - женщину, 
              которая ругается с мужчиной.
            </InfoRow>
          </Div>
        </Group>

        <Group>
          <Div align="middle">
            <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

            <InfoRow>
              Коровка говорит "муууу" - трехпанельный комикс с животными, на котором корова говорит "муууу", 
              собачка говорит "гав-гав", а третий персонаж изображает что-то плохое, свойственное людям. 
              Например, крыса показывает человека, готового подставить друга, а змея - женщину, 
              которая ругается с мужчиной.
            </InfoRow>
          </Div>
        </Group>

      </div>
    );
  }
}

class MemePop extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    
    }
  } 

  render() {
    return (
      <div style={{ paddingBottom: 80 }}>
        <PanelHeader>Pop memes</PanelHeader>

        <Group>
          <Div align="middle">
            <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

            <InfoRow>
              Коровка говорит "муууу" - трехпанельный комикс с животными, на котором корова говорит "муууу", 
              собачка говорит "гав-гав", а третий персонаж изображает что-то плохое, свойственное людям. 
              Например, крыса показывает человека, готового подставить друга, а змея - женщину, 
              которая ругается с мужчиной.
            </InfoRow>
          </Div>
        </Group>

        <Group>
          <Div align="middle">
            <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

            <InfoRow>
              Коровка говорит "муууу" - трехпанельный комикс с животными, на котором корова говорит "муууу", 
              собачка говорит "гав-гав", а третий персонаж изображает что-то плохое, свойственное людям. 
              Например, крыса показывает человека, готового подставить друга, а змея - женщину, 
              которая ругается с мужчиной.
            </InfoRow>
          </Div>
        </Group>

        <Group>
          <Div align="middle">
            <img src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

            <InfoRow>
              Коровка говорит "муууу" - трехпанельный комикс с животными, на котором корова говорит "муууу", 
              собачка говорит "гав-гав", а третий персонаж изображает что-то плохое, свойственное людям. 
              Например, крыса показывает человека, готового подставить друга, а змея - женщину, 
              которая ругается с мужчиной.
            </InfoRow>
          </Div>
        </Group>

      </div>
    );
  }
}

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeStory: 'meme_search'
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }

  render () {

    return (
      <Epic activeStory={this.state.activeStory} tabbar={
        <Tabbar id="epic_footer">
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'meme_search'}
            data-story="meme_search"
          ><Icon24Search /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'meme_explore'}
            data-story="meme_explore"
          ><Icon24Education/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'meme_hot'}
            data-story="meme_hot"
          ><Icon24Flash/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'meme_pop'}
            data-story="meme_pop"
          ><Icon24Favorite/></TabbarItem>
        </Tabbar>
      }>
        <View id="meme_search" activePanel="meme_search">
          <Panel id="meme_search">
            <MemeSearch />
          </Panel>
        </View>
        <View id="meme_explore" activePanel="meme_explore">
          <Panel id="meme_explore">
            <MemeExplorer />
          </Panel>
        </View>
        <View id="meme_hot" activePanel="meme_hot">
          <Panel id="meme_hot">
            <MemeHot />
          </Panel>
        </View>
        <View id="meme_pop" activePanel="meme_pop">
          <Panel id="meme_pop">
            <MemePop />
          </Panel>
        </View>
      </Epic>
    )
  }
}

export default App;
