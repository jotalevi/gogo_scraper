module.exports = {
  port: "9990",
  scrape_url: "https://ww2.gogoanimes.org",
  rule_path: {
    popular: "/popular?page=",
    search: "/search?keyword=",
    anime: "/category/",
    episode: "/watch/"
  },
  proxy_path: "/api"
}