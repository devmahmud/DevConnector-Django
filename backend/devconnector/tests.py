from django.test import TestCase
from .models import User, Profile, Experience, Education, Post, Comment


class YourAppTestCase(TestCase):
    def setUp(self):
        # Create test data for the models
        self.user = User.objects.create_user(name='Kirubel Alemu', email='kirubelalemu@email.com', password='password123')
        self.profile = Profile.objects.create(
            user=self.user,
            company='ABC Corp',
            website='https://example.com',
            location='City',
            status='Active',
            skills='Python, Django',
            bio='Lorem ipsum',
            githubusername='johndoe',
            youtube='https://youtube.com/kirubel',
            twitter='https://twitter.com/johndoe',
            facebook='https://facebook.com/johndoe',
            linkedin='https://linkedin.com/in/johndoe',
            instagram='https://instagram.com/johndoe'
        )
        self.experience = Experience.objects.create(
            profile=self.profile,
            title='Software Engineer',
            company='XYZ Corp',
            location='City',
            from_date='2022-01-01',
            to_date='2023-01-01',
            current=False,
            description='Lorem ipsum'
        )
        self.education = Education.objects.create(
            profile=self.profile,
            school='ABC School',
            degree='Bachelor of Science',
            field_of_study='Computer Science',
            from_date='2018-01-01',
            to_date='2022-01-01',
            current=False,
            description='Lorem ipsum'
        )
        self.post = Post.objects.create(
            user=self.user,
            text='Hello, world!',
            name='Kirubel Alemu',
            avatar='https://example.com/avatar.jpg'
        )
        self.comment = Comment.objects.create(
            user=self.user,
            post=self.post,
            text='Great post!'
        )

    def test_user_model(self):
        self.assertEqual(self.user.name, 'Kirubel Alemu')
        self.assertEqual(self.user.email, 'kirubelalemu@email.com')
        self.assertTrue(self.user.check_password('password123'))

    def test_profile_model(self):
        self.assertEqual(self.profile.user, self.user)
        self.assertEqual(self.profile.company, 'ABC Corp')
        self.assertEqual(self.profile.website, 'https://example.com')
        self.assertEqual(self.profile.location, 'City')
        self.assertEqual(self.profile.status, 'Active')
        self.assertEqual(self.profile.skills, 'Python, Django')
        self.assertEqual(self.profile.bio, 'Lorem ipsum')
        self.assertEqual(self.profile.githubusername, 'johndoe')
        self.assertEqual(self.profile.youtube, 'https://youtube.com/kirubel')
        self.assertEqual(self.profile.twitter, 'https://twitter.com/johndoe')
        self.assertEqual(self.profile.facebook, 'https://facebook.com/johndoe')
        self.assertEqual(self.profile.linkedin, 'https://linkedin.com/in/johndoe')
        self.assertEqual(self.profile.instagram, 'https://instagram.com/johndoe')

    def test_experience_model(self):
        self.assertEqual(self.experience.profile, self.profile)
        self.assertEqual(self.experience.title, 'Software Engineer')
        self.assertEqual(self.experience.company, 'XYZ Corp')
        self.assertEqual(self.experience.location, 'City')
        self.assertEqual(str(self.experience.from_date), '2022-01-01')
        self.assertEqual(str(self.experience.to_date), '2023-01-01')
        self.assertFalse(self.experience.current)
        self.assertEqual(self.experience.description, 'Lorem ipsum')

    def test_education_model(self):
        self.assertEqual(self.education.profile, self.profile)
        self.assertEqual(self.education.school, 'ABC School')
        self.assertEqual(self.education.degree, 'Bachelor of Science')
        self.assertEqual(self.education.field_of_study, 'Computer Science')
        self.assertEqual(str(self.education.from_date), '2018-01-01')
        self.assertEqual(str(self.education.to_date), '2022-01-01')
        self.assertFalse(self.education.current)
        self.assertEqual(self.education.description, 'Lorem ipsum')

    def test_post_model(self):
        self.assertEqual(self.post.user, self.user)
        self.assertEqual(self.post.text, 'Hello, world!')
        self.assertEqual(self.post.name, 'Kirubel Alemu')
        self.assertEqual(self.post.avatar, 'https://example.com/avatar.jpg')

    def test_comment_model(self):
        self.assertEqual(self.comment.user, self.user)
        self.assertEqual(self.comment.post, self.post)
        self.assertEqual(self.comment.text, 'Great post!')

    def test_post_ordering(self):
        # Create a new post with a later date
        later_post = Post.objects.create(
            user=self.user,
            text='New post',
            name='Kirubel Alemu',
            avatar='https://example.com/avatar.jpg'
        )
        # Check if the later post appears first in the queryset
        posts = Post.objects.all()
        self.assertEqual(posts[0], later_post)
        self.assertEqual(posts[1], self.post)




if __name__ == '__main__':
    unittest.main()
# Create your tests here.
