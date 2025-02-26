/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx324817b915f86147',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd5a8f45d9d82e55a466d77f53ae6e8d4',

  PROVINCE: '山西省',
  CITY: '大同市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '吴愿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oC9Lp6Reay-Mv1tbLB1F1MdY_KXQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '45Mld5GrpfeV_9p0bmCkvdMaMQpkJpf-wuikUEO8xmQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '愿宝贝', year: '1997', date: '11-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '帅先森', year: '1998', date: '12-13',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '04-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-04-10' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '45Mld5GrpfeV_9p0bmCkvdMaMQpkJpf-wuikUEO8xmQ',

  CALLBACK_USERS: [
    {
      name: '朱帅^.^',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oC9Lp6VSDhPfXErEuq4l5TZVC9o0',
    }
  ],

}

module.exports = USER_CONFIG

