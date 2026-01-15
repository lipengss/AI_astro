export const types = [
  {
    name: "全部",
    category: "all",
  },
  {
    name: "图像生成",
    category: "image",
  },
  {
    name: "文本处理",
    category: "text",
  },
  {
    name: "视频生成",
    category: "video",
  },
  {
    name: "音频处理",
    category: "audio",
  },
  {
    name: '代码助手',
    category: 'code',
  },
  {
    name: "3D建模",
    category: "3d",
  },
];
export const tools = [
  {
    name: "Midjourney",
    tag: "图像生成",
    tagClass: "tag-green",
    category: "image",
    desc: "艺术风格图像生成领域的领导者，擅长创意概念设计、插画绘制和超现实艺术作品创作。",
    iconClass: "icon-midjourney",
    iconType: "icon",
    iconContent: "ri-sailboat-fill",
    features: [
      { icon: "ri-palette-line", title: "Artistic" },
      { icon: "ri-magic-line", title: "Creative" },
      { icon: "ri-discord-line", title: "Discord Based" }
    ]
  },
  {
    name: "ChatGPT",
    tag: "文本处理",
    tagClass: "tag-blue",
    category: "text",
    desc: "由 OpenAI 开发的革命性智能对话助手，能够进行复杂的文本生成、代码编写和逻辑问答。",
    iconClass: "icon-chatgpt",
    iconType: "icon",
    iconContent: "ri-openai-fill",
    features: [
      { icon: "ri-chat-1-line" },
      { icon: "ri-code-s-slash-line" },
      { icon: "ri-translate-2" }
    ]
  },
  {
    name: "Stable Diffusion",
    tag: "图像生成",
    tagClass: "tag-green",
    category: "image",
    desc: "开源图像生成模型的代表，支持本地部署，拥有极高的可定制性和庞大的模型生态社区。",
    iconClass: "icon-stable",
    iconType: "icon",
    iconContent: "ri-image-edit-line",
    features: [
      { icon: "ri-open-source-line" },
      { icon: "ri-cpu-line" },
      { icon: "ri-brush-line" }
    ]
  },
  {
    name: "Runway Gen-2",
    tag: "视频生成",
    tagClass: "tag-purple",
    category: "video",
    desc: "专业的 AI 视频编辑与生成工具，支持文本生成视频、视频风格化转换，不仅是生成工具更是创意套件。",
    iconClass: "icon-runway",
    iconType: "text",
    iconContent: "R",
    iconStyle: "font-weight:900; font-family:sans-serif;",
    features: [
      { icon: "ri-movie-line" },
      { icon: "ri-edit-line" },
      { icon: "ri-clapperboard-line" }
    ]
  },
  {
    name: "ElevenLabs",
    tag: "音频处理",
    tagClass: "tag-pink",
    category: "audio",
    desc: "提供惊人逼真度的 AI 语音合成与声音克隆服务，支持多语言情感表达，适用于内容创作。",
    iconClass: "icon-eleven",
    iconType: "text",
    iconContent: "II",
    iconStyle: "font-size: 16px;",
    features: [
      { icon: "ri-mic-line" },
      { icon: "ri-sound-module-line" },
      { icon: "ri-global-line" }
    ]
  },
  {
    name: "GitHub Copilot",
    tag: "代码助手",
    tagClass: "tag-orange",
    category: "code",
    desc: "你的 AI 结对编程助手，基于 OpenAI Codex，能够实时提供代码建议、自动补全和函数生成。",
    iconClass: "icon-github",
    iconType: "icon",
    iconContent: "ri-github-fill",
    features: [
      { icon: "ri-code-box-line" },
      { icon: "ri-terminal-box-line" },
      { icon: "ri-lightbulb-line" }
    ]
  },
  {
    name: "Sora",
    tag: "视频生成",
    tagClass: "tag-purple",
    category: "video",
    desc: "OpenAI 最新推出的文本到视频生成模型，能够生成长达一分钟的高质量、连贯且符合物理规律的视频。",
    iconClass: "icon-sora",
    iconType: "icon",
    iconContent: "ri-vidicon-line",
    features: [
      { icon: "ri-film-line" },
      { icon: "ri-hd-line" },
      { icon: "ri-landscape-line" }
    ]
  },
  {
    name: "DALL-E 3",
    tag: "图像生成",
    tagClass: "tag-green",
    category: "image",
    desc: "OpenAI 的图像生成模型，能精准理解复杂的自然语言提示词，并将其转化为精美的视觉图像。",
    iconClass: "icon-dalle",
    iconType: "text",
    iconContent: "D",
    iconStyle: "font-weight: bold; font-family: serif;",
    features: [
      { icon: "ri-gallery-line" },
      { icon: "ri-text-spacing" },
      { icon: "ri-robot-line" }
    ]
  },
  {
    name: "Claude 3",
    tag: "文本处理",
    tagClass: "tag-blue",
    category: "text",
    desc: "Anthropic 开发的先进 AI 模型，以长上下文窗口和高安全性著称，擅长复杂推理和写作。",
    iconClass: "icon-claude",
    iconType: "icon",
    iconContent: "ri-brain-line",
    features: [
      { icon: "ri-file-text-line" },
      { icon: "ri-shield-check-line" },
      { icon: "ri-book-read-line" }
    ]
  },
  {
    name: "Suno",
    tag: "音频处理",
    tagClass: "tag-pink",
    category: "audio",
    desc: "能够创作广播级歌曲的 AI 音乐生成器，支持生成包含人声和配乐的完整音乐作品。",
    iconClass: "icon-suno",
    iconType: "icon",
    iconContent: "ri-music-2-fill",
    features: [
      { icon: "ri-music-line" },
      { icon: "ri-mic-2-line" },
      { icon: "ri-disc-line" }
    ]
  },
  {
    name: "Luma Dream",
    tag: "视频生成",
    tagClass: "tag-purple",
    category: "video",
    desc: "新一代高质量视频生成模型，速度快，支持由图生视频，物理模拟效果逼真。",
    iconClass: "icon-luma",
    iconType: "icon",
    iconContent: "ri-video-add-line",
    features: [
      { icon: "ri-speed-line" },
      { icon: "ri-camera-lens-line" },
      { icon: "ri-movie-2-line" }
    ]
  },
  {
    name: "Notion AI",
    tag: "文本处理",
    tagClass: "tag-blue",
    category: "text",
    desc: "集成在 Notion 笔记中的 AI 助手，帮助用户写作、整理总结和提取信息，提升工作效率。",
    iconClass: "icon-notion",
    iconType: "text",
    iconContent: "N",
    iconStyle: "font-weight: bold; font-family: serif;",
    features: [
      { icon: "ri-pages-line" },
      { icon: "ri-quill-pen-line" },
      { icon: "ri-magic-line" }
    ]
  }
];

