import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortBy } from "lodash";

const IMAGE_REGEX = /!\[(?<alt>[^\][]*?)]\((?<filename>[^\][]*?)(?=“|\))“?(?<layoutclass>[^\][”]+)?”?\)/;

export function getPost(fileName: string) {
  const { data, content } = matter(
    fs.readFileSync(path.join(process.cwd(), "posts", fileName), "utf8").trim()
  );

  const imageMatches = content.match(IMAGE_REGEX);
  let image = imageMatches ? imageMatches[2] : "";

  if (image?.startsWith("/")) {
    image = `https://www.getoutline.com${image}`;
  }

  const title = data.title;
  const slug = data.slug;
  const tag = data.tag || "";
  const date = data.date.toISOString();
  return { title, slug, date, tag, content, image };
}

export function getPosts() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "posts"));
  let posts = [];

  for (const fileName of fileNames) {
    if ([".DS_Store", "..", "."].includes(fileName)) {
      continue;
    }

    posts.push(getPost(fileName));
  }

  return sortBy(posts, (post) => post.date).reverse();
}
