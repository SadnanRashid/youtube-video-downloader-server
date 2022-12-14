fetch("https://www.reddit.com/r/creepy.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://www.reddit.com/r/creepy.json?limit=100")
  .then((response) => response.json())
  .then((data) => console.log(data));

const obj = {
  kind: "t3",
  data: {
    approved_at_utc: null,
    subreddit: "memes",
    selftext: "",
    author_fullname: "t2_bf781dte",
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: "absolute despair",
    link_flair_richtext: [],
    subreddit_name_prefixed: "r/memes",
    hidden: false,
    pwls: 6,
    link_flair_css_class: null,
    downs: 0,
    thumbnail_height: 140,
    top_awarded_type: null,
    hide_score: false,
    name: "t3_wowpwp",
    quarantine: false,
    link_flair_text_color: "dark",
    upvote_ratio: 0.93,
    author_flair_background_color: null,
    subreddit_type: "public",
    ups: 34699,
    total_awards_received: 16,
    media_embed: {},
    thumbnail_width: 140,
    author_flair_template_id: null,
    is_original_content: false,
    user_reports: [],
    secure_media: null,
    is_reddit_media_domain: true,
    is_meta: false,
    category: null,
    secure_media_embed: {},
    link_flair_text: null,
    can_mod_post: false,
    score: 34699,
    approved_by: null,
    is_created_from_ads_ui: false,
    author_premium: false,
    thumbnail:
      "https://b.thumbs.redditmedia.com/EC9z2_YdswOipJlHzImQRobmUfLlh424jhwGh0HLsLY.jpg",
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: { gid_1: 6 },
    post_hint: "image",
    content_categories: null,
    is_self: false,
    mod_note: null,
    created: 1660561315,
    link_flair_type: "text",
    wls: 6,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: "text",
    domain: "i.redd.it",
    allow_live_comments: true,
    selftext_html: null,
    likes: null,
    suggested_sort: null,
    banned_at_utc: null,
    url_overridden_by_dest: "https://i.redd.it/5v1fn29szuh91.gif",
    view_count: null,
    archived: false,
    no_follow: false,
    is_crosspostable: false,
    pinned: false,
    over_18: false,
    preview: {
      images: [
        {
          source: {
            url: "https://preview.redd.it/5v1fn29szuh91.gif?format=png8&amp;s=db716edb139d960afd42ec0e705d4c550de2b209",
            width: 1080,
            height: 1080,
          },
          resolutions: [
            {
              url: "https://preview.redd.it/5v1fn29szuh91.gif?width=108&amp;crop=smart&amp;format=png8&amp;s=1db8ac4efcfd27951d1a1db8e2afe540f3cf5965",
              width: 108,
              height: 108,
            },
            {
              url: "https://preview.redd.it/5v1fn29szuh91.gif?width=216&amp;crop=smart&amp;format=png8&amp;s=511545c9e804880168be2f553bb1cf6a7be8102d",
              width: 216,
              height: 216,
            },
            {
              url: "https://preview.redd.it/5v1fn29szuh91.gif?width=320&amp;crop=smart&amp;format=png8&amp;s=fe9aca96e6bcf93ac427d26eaf708c04f23dd3cb",
              width: 320,
              height: 320,
            },
            {
              url: "https://preview.redd.it/5v1fn29szuh91.gif?width=640&amp;crop=smart&amp;format=png8&amp;s=59f158e4e5d465f001449bf4866f2304333eeb5f",
              width: 640,
              height: 640,
            },
            {
              url: "https://preview.redd.it/5v1fn29szuh91.gif?width=960&amp;crop=smart&amp;format=png8&amp;s=3663024c9e9c8f346a5b69d314d513df02af4663",
              width: 960,
              height: 960,
            },
            {
              url: "https://preview.redd.it/5v1fn29szuh91.gif?width=1080&amp;crop=smart&amp;format=png8&amp;s=2b40daa83f61ce8dc9799c31c6bbebea21986961",
              width: 1080,
              height: 1080,
            },
          ],
          variants: {
            gif: {
              source: {
                url: "https://preview.redd.it/5v1fn29szuh91.gif?s=1e167dbe1d71a34c0a6009e75172387a03823232",
                width: 1080,
                height: 1080,
              },
              resolutions: [
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=108&amp;crop=smart&amp;s=3812c167a10ea164dd19a21670ce209db3c4f0f2",
                  width: 108,
                  height: 108,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=216&amp;crop=smart&amp;s=868550c4f8771d9e5f3661decfd73633fc8164be",
                  width: 216,
                  height: 216,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=320&amp;crop=smart&amp;s=f028053af204b6cdc7ed34efb23960720c88c7da",
                  width: 320,
                  height: 320,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=640&amp;crop=smart&amp;s=416d8fb2bbf189a2a5aef536eb74f5773b604cef",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=960&amp;crop=smart&amp;s=0d8cc0f3ff41111b6cd1b2c6a6bcd7db421bbf01",
                  width: 960,
                  height: 960,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=1080&amp;crop=smart&amp;s=844225e5b46f0a064939bf104d02381a2d5b6111",
                  width: 1080,
                  height: 1080,
                },
              ],
            },
            mp4: {
              source: {
                url: "https://preview.redd.it/5v1fn29szuh91.gif?format=mp4&amp;s=87b541a0754f6e630be621f8fbf2da5bdd34739f",
                width: 1080,
                height: 1080,
              },
              resolutions: [
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=108&amp;format=mp4&amp;s=43de9aaa11458c7d9b277e4aad4316aecdaf41c6",
                  width: 108,
                  height: 108,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=216&amp;format=mp4&amp;s=2c2c1ea104c82efc382e97ef79280fa207cf7bf4",
                  width: 216,
                  height: 216,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=320&amp;format=mp4&amp;s=249155ac1822bfe78110faf2e281b995c57de10a",
                  width: 320,
                  height: 320,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=640&amp;format=mp4&amp;s=c2c522a03e1991e09fdb03bd694554a9acf845d6",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=960&amp;format=mp4&amp;s=6e74e5e6159287ee674a83ab7b3e1aa7e9e269f3",
                  width: 960,
                  height: 960,
                },
                {
                  url: "https://preview.redd.it/5v1fn29szuh91.gif?width=1080&amp;format=mp4&amp;s=c829eb30e09ea928d4b8c2d07f200660f1362f8b",
                  width: 1080,
                  height: 1080,
                },
              ],
            },
          },
          id: "7-9fdB6nuvET1WOxbyZ9GZYqjTC9xH614Yon93YyXZQ",
        },
      ],
      enabled: true,
    },
    all_awardings: [
      {
        giver_coin_reward: null,
        subreddit_id: null,
        is_new: false,
        days_of_drip_extension: null,
        coin_price: 125,
        id: "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
        penny_donate: null,
        award_sub_type: "GLOBAL",
        coin_reward: 0,
        icon_url:
          "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
        days_of_premium: null,
        tiers_by_required_awardings: null,
        resized_icons: [
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
            width: 16,
            height: 16,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
            width: 32,
            height: 32,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
            width: 48,
            height: 48,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
            width: 64,
            height: 64,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
            width: 128,
            height: 128,
          },
        ],
        icon_width: 2048,
        static_icon_width: 2048,
        start_date: null,
        is_enabled: true,
        awardings_required_to_grant_benefits: null,
        description: "When you come across a feel-good thing.",
        end_date: null,
        sticky_duration_seconds: null,
        subreddit_coin_reward: 0,
        count: 8,
        static_icon_height: 2048,
        name: "Wholesome",
        resized_static_icons: [
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
            width: 16,
            height: 16,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
            width: 32,
            height: 32,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
            width: 48,
            height: 48,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
            width: 64,
            height: 64,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
            width: 128,
            height: 128,
          },
        ],
        icon_format: null,
        icon_height: 2048,
        penny_price: null,
        award_type: "global",
        static_icon_url:
          "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
      },
      {
        giver_coin_reward: null,
        subreddit_id: null,
        is_new: false,
        days_of_drip_extension: null,
        coin_price: 100,
        id: "gid_1",
        penny_donate: null,
        award_sub_type: "GLOBAL",
        coin_reward: 0,
        icon_url:
          "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
        days_of_premium: null,
        tiers_by_required_awardings: null,
        resized_icons: [
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
            width: 16,
            height: 16,
          },
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
            width: 32,
            height: 32,
          },
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
            width: 48,
            height: 48,
          },
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
            width: 64,
            height: 64,
          },
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
            width: 128,
            height: 128,
          },
        ],
        icon_width: 512,
        static_icon_width: 512,
        start_date: null,
        is_enabled: true,
        awardings_required_to_grant_benefits: null,
        description: "Shows the Silver Award... and that's it.",
        end_date: null,
        sticky_duration_seconds: null,
        subreddit_coin_reward: 0,
        count: 6,
        static_icon_height: 512,
        name: "Silver",
        resized_static_icons: [
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
            width: 16,
            height: 16,
          },
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
            width: 32,
            height: 32,
          },
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
            width: 48,
            height: 48,
          },
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
            width: 64,
            height: 64,
          },
          {
            url: "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
            width: 128,
            height: 128,
          },
        ],
        icon_format: null,
        icon_height: 512,
        penny_price: null,
        award_type: "global",
        static_icon_url:
          "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
      },
      {
        giver_coin_reward: null,
        subreddit_id: null,
        is_new: false,
        days_of_drip_extension: null,
        coin_price: 150,
        id: "award_f44611f1-b89e-46dc-97fe-892280b13b82",
        penny_donate: null,
        award_sub_type: "GLOBAL",
        coin_reward: 0,
        icon_url:
          "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png",
        days_of_premium: null,
        tiers_by_required_awardings: null,
        resized_icons: [
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
            width: 16,
            height: 16,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
            width: 32,
            height: 32,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
            width: 48,
            height: 48,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
            width: 64,
            height: 64,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
            width: 128,
            height: 128,
          },
        ],
        icon_width: 2048,
        static_icon_width: 2048,
        start_date: null,
        is_enabled: true,
        awardings_required_to_grant_benefits: null,
        description: "Thank you stranger. Shows the award.",
        end_date: null,
        sticky_duration_seconds: null,
        subreddit_coin_reward: 0,
        count: 2,
        static_icon_height: 2048,
        name: "Helpful",
        resized_static_icons: [
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
            width: 16,
            height: 16,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
            width: 32,
            height: 32,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
            width: 48,
            height: 48,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
            width: 64,
            height: 64,
          },
          {
            url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
            width: 128,
            height: 128,
          },
        ],
        icon_format: null,
        icon_height: 2048,
        penny_price: null,
        award_type: "global",
        static_icon_url:
          "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png",
      },
    ],
    awarders: [],
    media_only: false,
    can_gild: false,
    spoiler: false,
    locked: false,
    author_flair_text: null,
    treatment_tags: [],
    visited: false,
    removed_by: null,
    num_reports: null,
    distinguished: null,
    subreddit_id: "t5_2qjpg",
    author_is_blocked: false,
    mod_reason_by: null,
    removal_reason: null,
    link_flair_background_color: "",
    id: "wowpwp",
    is_robot_indexable: true,
    report_reasons: null,
    author: "wavewiggle13",
    discussion_type: null,
    num_comments: 581,
    send_replies: true,
    whitelist_status: "all_ads",
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink: "/r/memes/comments/wowpwp/absolute_despair/",
    parent_whitelist_status: "all_ads",
    stickied: false,
    url: "https://i.redd.it/5v1fn29szuh91.gif",
    subreddit_subscribers: 20356524,
    created_utc: 1660561315,
    num_crossposts: 3,
    media: null,
    is_video: false,
  },
};
