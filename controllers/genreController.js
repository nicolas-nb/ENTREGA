const Genre = require("../models/genre");
const Author = require("../models/author");
const Book = require("../models/book");
const BookInstance = require("../models/bookinstance");
const Avaliation = require("../models/avaliation");

// Display list of all Avaliations.
exports.avaliation_list = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Avaliation list");
};

// Display detail page for a specific Avaliation.
exports.avaliation_detail = async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Avaliation detail: ${req.params.id}`);
};

// Display Avaliation create form on GET.
exports.avaliation_create_get = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Avaliation create GET");
};

// Handle Avaliation create on POST.
exports.avaliation_create_post = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Avaliation create POST");
};

// Display Avaliation delete form on GET.
exports.avaliation_delete_get = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Avaliation delete GET");
};

// Handle Avaliation delete on POST.
exports.avaliation_delete_post = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Avaliation delete POST");
};

// Display Avaliation update form on GET.
exports.avaliation_update_get = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Avaliation update GET");
};

// Handle Avaliation update on POST.
exports.avaliation_update_post = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Avaliation update POST");
};

// Display list of all Genres.
exports.genre_list = async (req, res, next) => {
    const allGenres = await Genre.find().sort({ name: 1 }).exec();
    res.render("genre_list", {
        title: "Genre List",
        genre_list: allGenres,
    });
};

// Display detail page for a specific Genre.
exports.genre_detail = async (req, res, next) => {
    // Get details of genre and all associated books (in parallel)
    const [genre, booksInGenre] = await Promise.all([
        Genre.findById(req.params.id).exec(),
        Book.find({ genre: req.params.id }, "title summary").exec(),
    ]);
    if (genre === null) {
        // No results.
        const err = new Error("Genre not found");
        err.status = 404;
        return next(err);
    }

    res.render("genre_detail", {
        title: "Genre Detail",
        genre,
        genre_books: booksInGenre,
    });
};

// Display Genre create form on GET.
exports.genre_create_get = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre create GET");
};

// Handle Genre create on POST.
exports.genre_create_post = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre create POST");
};

// Display Genre delete form on GET.
exports.genre_delete_get = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
exports.genre_delete_post = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
exports.genre_update_get = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
exports.genre_update_post = async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre update POST");
};