<?php include('../includes/header.php'); ?>

<section id="contact" class="intro-section">
    <h2>Contact Us</h2>
    <form action="submit_contact_form.php" method="post">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="5" required></textarea><br>
        <input type="submit" value="Submit">
    </form>
</section>

<?php include('../includes/footer.php'); ?>
