module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      avatar: String,
      name: String,
      description: String,
        image: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("post", schema);
  return Tutorial;
};
