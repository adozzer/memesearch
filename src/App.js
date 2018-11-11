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

var pictures;
pictures = fetch(`http://jsonplaceholder.typicode.com/photos`)
.then(result=>result.json())




function generate_search_result_image_block(image, text) {

    var gr = document.createElement('div');
    gr.className = "Group Group--ios";

    var div1 = document.createElement("div"); 
    div1.className="Group__content";

    var div2 = document.createElement("div"); 
    div2.className="Div Div--ios";
    div2.align = "middle";

    var img = document.createElement("img"); 
    img.width = "500";
    img.src = image;

    var div_infoRow = document.createElement("div"); 
    div_infoRow.className = "InfoRow InfoRow--ios";
    var div_infoRow_content = document.createElement("div"); 
    var infoRowContent = document.createTextNode(text); 

    div_infoRow_content.appendChild(infoRowContent);
    div_infoRow.appendChild(div_infoRow_content);

    div2.appendChild(img);
    div2.appendChild(div_infoRow);
    div1.appendChild(div2);
    gr.appendChild(div1);

    return gr;


    // <div class="Group Group--ios">
    // <div class="Group__content">
    // <div align="middle" class="Div Div--ios">
    // <img width="500" src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg">
    // <div class="InfoRow InfoRow--ios">
    // <div>Коровка говорит "муууу" - трехпанельный комикс с животными, на котором корова говорит "муууу", собачка говорит "гав-гав", а третий персонаж изображает что-то плохое, свойственное людям. Например, крыса показывает человека, готового подставить друга, а змея - женщину, которая ругается с мужчиной.
    // </div>
    // </div>
    // </div>
    // </div>
    // </div>
  }



/////////////////// SEARCH BY PIC /////////////////////
 function getBase64(file) {
    var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
    console.log('B64 SHIT ', reader.result);
    base64OnloadCallback(reader.result)
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
     alert('Error: ', error);
    };
   }

 function base64OnloadCallback(result) {

      let encoded = result.replace(/^data:(.*;base64,)?/, '');
      if ((encoded.length % 4) > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }
    console.log('B64 SHIT ENCODED ', encoded);

    // try {
        var xhr = new XMLHttpRequest();
        var url = "https://95.213.236.96:5000/predict";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                searchPostRequestHandler(xhr);
            }
            // else {
            //     searchPostRequestHandler(0);
            // }
        };
        var data = JSON.stringify({"data": encoded});
        xhr.send(data);
    // }
    // catch(error) {
    //     alert(error);
    //     console.error(error);
    //     searchPostRequestHandler(0);
    // }
    console.log('B64 DATA WERE SENT, WAIT FOR A RESPONSE...');

  }

  function searchPostRequestHandler(xhr) {
    // first way -  {"images":[{url:"url", test:"text"}]}
    // second way -  {"images":[{url:"base64-1", test:"text"}]}
    //        browsers can handle links like 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA.......' like an ordinary image url
    // App.setState({ activeView: 'meme_search_result' });
    // this.state.activeStory = "meme_search_result";
    // App.state = { activeView: 'meme_search_result' };

    // if (xhr!=0) {
        console.log(json);
        var json = JSON.parse(xhr.responseText);
        var images = json.predictions;

        // {'predictions': [{'link', 'title', 'description', 'count'}]}
    // }
    // else {
        // /////////////DEBUG HARDCODE///////////////
        // var idbg_json = '{"images":[{"link":"https://cs9.pikabu.ru/post_img/big/2016/09/25/8/1474810620116120422.jpg", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"url":"https://cs9.pikabu.ru/post_img/big/2016/09/25/8/1474810620116120422.jpg", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"url":"https://cs9.pikabu.ru/post_img/big/2016/09/25/8/1474810620116120422.jpg", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]}'
        // var json = JSON.parse(idbg_json);
        // var images = json.images;
        // //////////////////////////////////////////
    // }
    
    var div_to_modify = document.getElementsByClassName("Panel__in-after")[0];
    // clean it up
    while (div_to_modify.firstChild) {
        div_to_modify.removeChild(div_to_modify.firstChild);
    }

    var div_to_modify = document.getElementsByClassName("Cell__main")[0];
    // clean it up
    while (div_to_modify.firstChild) {
        div_to_modify.removeChild(div_to_modify.firstChild);
    }

    for (var i = 0, len = images.length; i < len; i += 1) {
        var image = images[i].link;
        var text = images[i].description;
        var title = images[i].title;
        var count = images[i].count;

        div_to_modify.appendChild(generate_search_result_image_block(image, text));
    }
    console.log(json);
  }
//////////////////////// SEARCH BY PIC END ///////////////////////////////


//////////////////////// EXPLORE ///////////////////////////////////

//////////////////////// EXPLORE END ///////////////////////////////



class MemeSearch extends React.Component {


  constructor (props) {
    super(props);
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange (search) { this.setState({ search }); }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {

    var files = event.target.files, file, p, t, i, len;
    for (i = 0, len = files.length; i < len; i += 1) {
        file = files[i];
        console.log(file);
        if (file.type.match(/image.*/)) {
            var b64 = getBase64(file);
            // console.log(b64);
        } else {

        }
    }

    // alert('A name was submitted: ' + event.target.files);
    event.preventDefault();
    
    // console.log(event.target.files);
  }

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
          <FormLayout onSubmit={this.handleSubmit}>
            <File before={<Icon48Camera />} size="xl" level="outline" onChange={this.handleChange}> 
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
    this.state={
      items:[]
    };
  } 

  componentDidMount(){
    fetch(`http://jsonplaceholder.typicode.com/photos`)
    .then(result=>result.json())
    .then(items=>this.setState({items}))
  }

  render() {
    return (
      <div style={{ paddingBottom: 80 }}>
        <PanelHeader>Explore your meme</PanelHeader>

        <Group>
          <Header level="2">
            {this.state.items.length ? this.state.items[0].title : <p>Loading...</p>}
          </Header>
          <Div align="middle">
            <img width="500" src={this.state.items.length ? this.state.items[0].url : ""}></img>

            <InfoRow>
              {this.state.items.length ?
              this.state.items[0].title : <p>Loading...</p>}
            </InfoRow>
          </Div>
        </Group>


        <Group>
          <Header level="2">Similar</Header>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              {
                this.state.items.map(item=>
                <div>
                  <img width="500" src={item.url}></img>
                </div>
                ) 
              }             
            </div>
          </HorizontalScroll>
        </Group>

      </div>
    );
  }
}

class MemeHot extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      items:[]
    }
  } 

  componentDidMount(){
    fetch(`http://jsonplaceholder.typicode.com/photos`)
    .then(result=>result.json())
    .then(items=>this.setState({items}))
  }

  render() {
    return (
      <div style={{ paddingBottom: 80 }}>
        <PanelHeader>Hot memes</PanelHeader>

        <Group>
          <Div align="middle">
            <img width="90%" src="https://memepedia.ru/wp-content/uploads/2018/10/meme12-5.jpg"></img>

            <InfoRow align="left">
              <b>Удивлённый Пикачу (Surprised Pikachu)</b> — 
              картинка-реакция из аниме «Покемон» с удивлённо приоткрывшим рот Пикачу. 
              Изображение используется в качестве реакции на очень предсказуемые результаты.
            </InfoRow>
          </Div>
        </Group>

        <Group>
          <Div align="middle">
            <img width="90%" src="https://memepedia.ru/wp-content/uploads/2018/10/doka-2.png"></img>

            <InfoRow align="left">
              <b>Дока 2 (Doka 2)</b> — 
              несуществующая компьютерная игра, которой, по мнению эксперта «Вестей ФМ», 
              увлекался керченский стрелок Владислав Росляков. Название игры, напоминающее «Доту 2»,
               стало мемом, высмеивающим связь между геймерами и террористами.
            </InfoRow>
          </Div>
        </Group>

        <Group>
          <Div align="middle">
            <img width="90%" src="https://memepedia.ru/wp-content/uploads/2018/06/unnamed-768x768.jpg"></img>

            <InfoRow align="left">
              <b>Глад Валакас (Пенис Детров, Жмышенко Валерий Альбертович)</b> — стример онлайн-игр, ставший известным 
              благодаря образу 54-летнего деда. Записывает видео, напрягая голосовые связки и говоря с акцентом.
            </InfoRow>
          </Div>
        </Group>

        <Group>
          <Div align="middle">
            <img width="90%" src="https://memepedia.ru/wp-content/uploads/2018/09/chi-da-1.jpg"></img>

            <InfoRow align="left">
              <b>Чи да?</b> — мемная фраза, которую можно встретить в 
              комментариях к разным постам во «ВКонтакте». Происходит от серии пранков видеоблогера Edward Bil.
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
            <img width="500" src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

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
            <img width="500" src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

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
            <img width="500" src="https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"></img>

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
      activeStory: 'meme_search',
      activePanel: 'meme_search'
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
        <View id="meme_search" activePanel={this.state.activePanel}>
          <Panel id="meme_search">
            <MemeSearch />
          </Panel>
          <Panel id="meme_search_result">
            <MemeSearch />
          </Panel>
        </View>
        <View id="meme_search_result" activePanel="meme_search_result">
          <Panel id="meme_search_result">
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
