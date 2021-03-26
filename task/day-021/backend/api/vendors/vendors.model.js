"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nama_produk: {
      type: String,
    },
    harga: {
      type: String,
    },
    jumlah_stok: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    id: false,
    toObject: {
      virtuals: true,
      getters: true,
    },
    toJSON: {
      virtuals: true,
      getters: true,
      setters: false,
    },
    timestamps: true,
  }
);

VendorSchema.pre("find", function () {
  this.where({ is_active: { $ne: false } });
});

module.exports = mongoose.model("Vendor", VendorSchema);
