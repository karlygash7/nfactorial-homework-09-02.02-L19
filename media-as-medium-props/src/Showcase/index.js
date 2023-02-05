import { articles } from "../data/data"
import Article from "./Article";

export default function ShowCase() {
    console.log(articles);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {articles.map((item) => (
                <Article article={item} key={item.id} />
            ))}
        </div>
    );
}