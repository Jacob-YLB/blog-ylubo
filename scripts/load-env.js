require('dotenv').config();

hexo.extend.filter.register('before_generate', function () {
  const gitalk = hexo.theme.config && hexo.theme.config.gitalk;
  if (!gitalk) return;
  if (process.env.GITALK_CLIENT_ID) gitalk.ClientID = process.env.GITALK_CLIENT_ID;
  if (process.env.GITALK_CLIENT_SECRET) gitalk.ClientSecret = process.env.GITALK_CLIENT_SECRET;
});
