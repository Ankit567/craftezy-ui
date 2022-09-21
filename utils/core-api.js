import pickBy from "lodash/pickBy";
import Request from "./request";

export class CoreApi {
  http = Request;
  _base_path = "";

  constructor(basePath) {
    this._base_path = basePath;
  }

  stringifySearchQuery(values) {
    const parsedValues = pickBy(values);
    return Object.keys(parsedValues)
      .map((k) => {
        if (k === "type") {
          return `${k}.slug:${parsedValues[k]};`;
        }
        if (k === "category") {
          return `categories.slug:${parsedValues[k]};`;
        }
        if (k === "tags") {
          return `tags.slug:${parsedValues[k]};`;
        }
        if (k === "variations") {
          return `variations.value:${parsedValues[k]};`;
        }
        return `${k}:${parsedValues[k]};`;
      })
      .join("")
      .slice(0, -1);
  }
  find(params) {
    const {
      type,
      text: name,
      category,
      tags,
      variations,
      status,
      is_active,
      shop_id,
      limit = 30,
      sortedBy = "DESC",
      orderBy = "created_at",
      min_price,
      max_price,
    } = params;
    const searchString = this.stringifySearchQuery({
      type,
      name,
      category,
      tags,
      variations,
      status,
      shop_id,
      is_active,
      min_price,
      max_price,
    });
    const queryString = `?search=${searchString}&searchJoin=and&limit=${limit}&sortedBy=${sortedBy}&orderBy=${orderBy}`;
    return this.http.get(this._base_path + queryString);
  }
  findAll() {
    return this.http.get(this._base_path);
  }
  fetchUrl(url) {
    return this.http.get(url);
  }
  postUrl(url, data) {
    return this.http.post(url, data);
  }
  findOne(id) {
    return this.http.get(`${this._base_path}/${id}`);
  }
  create(data, options) {
    return this.http.post(this._base_path, data, options).then((res) => res.data);
  }
  update(id, data) {
    return this.http.put(`${this._base_path}/${id}`, data).then((res) => res.data);
  }
  delete(id) {
    return this.http.delete(`${this._base_path}/${id}`);
  }
}
