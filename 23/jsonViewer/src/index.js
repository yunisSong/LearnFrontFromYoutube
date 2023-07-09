const testData = {
  code: 0,
  count: 1000,
  data: [
    {
      id: '10001',
      username: {
        id: null,
        username: '张三1',
        sex: '男',
        city: '浙江杭州',
        sign: '人生恰似一场修行',
        experience: {
          id: '10001',
          username: '张三1',
          sex: '男',
          city: '浙江杭州',
          sign: '人生恰似一场修行',
          experience: '116',
        },
      },
      sex: '男',
      city: '浙江杭州',
      sign: '人生恰似一场修行',
      experience: '116',
    },
    {
      id: '10002',
      username: '张三2',
      sex: '男',
      city: '浙江杭州',
      sign: '人生恰似一场修行',
      experience: '12',
      LAY_CHECKED: true,
    },
    {
      id: '10003',
      username: '张三3',
      sex: '男',
      city: '浙江杭州',
      sign: '人生恰似一场修行',
      experience: '65',
    },
    {
      id: '10004',
      username: '张三4',
      sex: '男',
      city: '浙江杭州',
      sign: '人生恰似一场修行',
      experience: '777',
    },
    {
      id: '10005',
      username: '张三5',
      sex: '男',
      city: '浙江杭州',
      sign: '人生恰似一场修行',
      experience: '86',
    },
    {
      id: '10006',
      username: '张三6',
      sex: '男',
      city: '浙江杭州',
      sign: '人生恰似一场修行',
      experience: '12',
    },
    {
      id: '10007',
      username: '张三7',
      sex: '男',
      city: '浙江杭州',
      sign: '人生恰似一场修行',
      experience: '16',
    },
    {
      id: '10008',
      username: '张三8',
      sex: '男',
      city: '浙江杭州',
      sign: '人生恰似一场修行',
      experience: '106',
    },
  ],
};
// 添加点击事件。

const toggleShow = (item) => {
  const isShow = item.classList.contains('show');
  const hiddenItems = () => {
    const jsonDom = document.querySelector('.show ~ .ul');
    const hiddenItemsDom = document.querySelector('.show ~ .hiddenItems');
    hiddenItemsDom.classList.toggle('ulShow');
    jsonDom.classList.toggle('ulHidden');
    item.classList.toggle('show');
  };
  if (!isShow) {
    item.classList.toggle('show');
  }
  hiddenItems();
};

const convertJson2Html = (json) => {
  let html = '';
  const type = typeof json;
  console.log('json: ', json);
  console.log('type: ', type);
  switch (type) {
    case 'object':
      const isNull = json === null;
      if (isNull) {
        const otherItem = `<span class='otherOptions'>${json}</span>`;
        html += otherItem;
        break;
      }
      const isArray = json instanceof Array;
      if (isArray) {
        const hiddenItems = `<span class='hiddenItems'> [${json.length} items]</span>`;
        html += hiddenItems;
      } else {
        var key_count = Object.keys(json).length;

        const hiddenItems = `<span class='hiddenItems'> { ${key_count} items }</span>`;
        html += hiddenItems;
      }

      // ul begin
      const ulBegin = '<ul class="ul">';
      html += ulBegin;

      if (isArray) {
        console.log('数组。。', json);
        //  for (var i = 0; i < json.length; ++i)
        html += '<span class="span">[</span>';

        const length = json.length;
        for (var i = 0; i < length; ++i) {
          const value = json[i];
          const liBegin = '<li class="array">';
          html += liBegin;
          let subHtml = convertJson2Html(value);
          html += subHtml;
          const liEnd = '</li>';
          html += liEnd;
        }
        html += '<span class="span">]</span>,';
      } else {
        html += '<span class="span">{</span>';
        for (var key in json) {
          const value = json[key];
          const liBegin = '<li class="object">';
          html += liBegin;
          const typeValue = typeof value;
          const isNull = value === null;
          if (!isNull && typeValue == 'object') {
            const button = `<a class='button' onClick='toggleShow(this)'></a>`;
            html += button;
            const isNull = json === null;
          }
          const keyItem = `<span class='keyString'>"${key}": </span>`;
          html += keyItem;
          let subHtml = convertJson2Html(value);
          html += subHtml;

          const liEnd = '</li>';
          html += liEnd;
        }
        html += '<span class="span">}</span>,';
      }

      // ul end
      const ulEnd = '</ul>';
      html += ulEnd;

      break;
    case 'string':
      const stringItem = `<span class='valueString'>"${json}"</span>`;
      html += stringItem;
      break;
    case 'number':
      const numberItem = `<span class='number'>${json}</span>`;
      html += numberItem;
      break;
    case 'boolean':
      const booleanItem = `<span class='boolean'>${json}</span>`;
      html += booleanItem;
      break;
    default:
      const otherItem = `<span class='otherOptions'>${json}</span>`;
      html += otherItem;
      break;
  }

  return html;
};
const html = convertJson2Html(testData);
const jsonShowDom = document.querySelector('#json');
jsonShowDom.innerHTML = html;
